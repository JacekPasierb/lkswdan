import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";
import {getToken} from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const {pathname} = req.nextUrl;

  // publiczne ścieżki w adminie
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // jeśli ktoś wchodzi w /admin (i podstrony)
  if (pathname.startsWith("/admin")) {
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/admin/login";
      url.searchParams.set("from", pathname); // opcjonalnie: powrót po loginie
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

// Ważne: middleware odpalaj tylko tam gdzie trzeba
export const config = {
  matcher: ["/admin/:path*"],
};
