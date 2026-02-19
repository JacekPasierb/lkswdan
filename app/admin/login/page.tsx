import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {redirect} from "next/navigation";
import LoginForm from "./loginForm";


export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  // jeśli już zalogowany → nie pokazuj loginu
  if (session) redirect("/admin");

  return <LoginForm />;
}
