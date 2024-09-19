import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const protectedRoutes = ['/home', '/LREntryTable', '/memo'];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

  if (isProtectedRoute) {
    const token = request.cookies.get('token')?.value;

    if (!token) {
      const loginUrl = new URL('/', request.url);
      return NextResponse.redirect(loginUrl);
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET);
      console.log("Token verified successfully");
    } catch (error) {
      console.error("Token verification error:", error.message);
      const loginUrl = new URL('/', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/home/:path*', '/LREntryTable/:path*', '/memo/:path*'],
};
