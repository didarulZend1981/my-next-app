import { NextResponse } from 'next/server';


const coo='next-superhero';

export const middleware = (request) => {
  const cookies = request.cookies.get('token');
  if(!cookies ||cookies.value !==coo ){
    
    return NextResponse.redirect(new URL('/login', request.nextUrl.origin));


  }

  return NextResponse.next()



  };

export const config = {
  matcher: ['/dashboards','/services']
};