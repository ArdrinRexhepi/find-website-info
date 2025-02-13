import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const res = NextResponse.next()

  const cookie = request.cookies.get("sessionId")
  // return NextResponse.redirect(new URL('/home', request.url))
  if(!cookie){
    res.cookies.set("sessionId", crypto.randomUUID())
  }
  return res

}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }