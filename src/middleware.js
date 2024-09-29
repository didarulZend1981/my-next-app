import { NextResponse } from 'next/server';

export const middleware = (request) => {
   return NextResponse.rewrite(new URL('/about', request.nextUrl.origin));
};

export const config = {
  matcher: '/dashboards',
};