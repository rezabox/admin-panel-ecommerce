import { NextResponse } from "next/server";

export function middleware(req) {
  const tokenData = req.cookies.get("token");

  if (!tokenData) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: [
    "/",
    "/users/:path*",
    "/products/:path*",
    "/categories/:path*",
    "/orders/:path*",
    "/transactions/:path*",
    "/coupons/:path*"
  ],
};
