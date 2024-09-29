import { NextResponse } from 'next/server';


export const middleware = (request) => {
  const cookies = request.cookies.get('token');
  if(!cookies){
    
    return NextResponse.redirect(new URL('/login', request.nextUrl.origin));


  }

  return NextResponse.next()



  };

export const config = {
  matcher: ['/dashboards','/services']
};