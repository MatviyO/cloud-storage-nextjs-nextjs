import { NextResponse } from 'next/server';
import {getAuthToken} from "@/utils/cookies";

export function middleware(req: { nextUrl: { pathname: string; }; url: string | URL | undefined; }) {
    const token = getAuthToken({ctx: req });

    if (req.nextUrl.pathname === '/' && !token) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    if (req.nextUrl.pathname === '/' && token) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
    }

    return NextResponse.next();
}