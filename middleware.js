import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  if (pathname === '/') {
    const lang = request.headers.get('accept-language')?.toLowerCase().startsWith('ar') ? 'ar' : request.headers.get('accept-language')?.toLowerCase().startsWith('tr') ? 'tr' : 'en';
    return NextResponse.redirect(new URL(`/${lang}`, request.url));
  }
  return NextResponse.next();
}

export const config = { matcher: ['/'] };
