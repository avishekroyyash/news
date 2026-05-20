import { NextResponse } from 'next/server'
import { auth } from './lib/auth';
import { headers } from 'next/headers';

export async function proxy(request) {
    //console.log(request,'this is request')
     const session = await auth.api.getSession({
        headers: await headers()
    })
    // console.log(session,'this is session')
    // const isloggin = false;
    if(session){
        NextResponse.next();
    }
    else {
       return NextResponse.redirect(new URL('/login', request.url))
    }
// return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
  matcher: ['/carrer','/news/:path*'],
}