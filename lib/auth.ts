import type {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import {connectDB} from "@/lib/db";
import User from "@/models/User";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {label: "Email", type: "text"},
        password: {label: "Hasło", type: "password"},
      },
      async authorize(credentials) {
        await connectDB();

        const email = credentials?.email;
        const password = credentials?.password;

        if (!email || !password) return null;

        const user = await User.findOne({email});
        if (!user) return null;

        const ok = await bcrypt.compare(password, user.password);
        if (!ok) return null;

        return {id: String(user._id), email: user.email};
      },
    }),
  ],

  session: {
    strategy: "jwt", // <- teraz TS wie, że to literal "jwt"
  },

  pages: {
    signIn: "/admin/login",
  },
};
