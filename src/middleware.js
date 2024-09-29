import { NextResponse } from 'next/server';
const user =true;
export const middleware = (request) => {
   
  if(!user){
    
    return NextResponse.redirect(new URL('/login', request.nextUrl.origin));


  }

  return NextResponse.next()



  };

export const config = {
  matcher: ['/dashboards','/services']
};