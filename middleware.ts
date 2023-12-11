import { NextResponse, type NextRequest } from "next/server";

const protectedRoutes = ["/dashboard", "/users", "/applicants", "/programs"];

export async function middleware(request: NextRequest) {
  let token = request.cookies.get("token");

  if (!token && protectedRoutes.includes(new URL(request.url).pathname)) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else if (
    token &&
    ["/", "/login", "/register"].includes(new URL(request.url).pathname)
  ) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/register",
    "/reset-password",
    "/dashboard",
    "/users",
    "/applicants",
    "/programs",
  ],
};
