import { NextResponse } from 'next/server';

export const middleware = (request) => {
   return NextResponse.redirect(new URL('/about', request.nextUrl.origin));
};

export const config = {
  matcher: '/dashboards',
};