import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const config = {
    matcher: ["/", "/login", "/signup", "/school", "/profile"]
};

export default async function middleware(req: NextRequest) {
    const token = await getToken({ req });
    const pathname = req.nextUrl.pathname;

    // Protect /school and /profile — redirect to login if not authenticated
    if (!token && (pathname === "/school" || pathname === "/profile")) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    // Redirect logged-in users away from login/signup pages
    if (token && (pathname === "/login" || pathname === "/signup")) {
        return NextResponse.redirect(new URL("/school", req.url));
    }

    return NextResponse.next();
}