// export { auth as middleware } from "@/auth"/


import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
const protectedRoutes = ["/dashboard", "/settings", "/profile"];


export default async function middleware(request: NextRequest) {
   const session = await auth();
   const adminRoutes = ["/dashboard", "/admin", "/upload-pdf"];
  const url = request.nextUrl;

   
    const isProtectedRoute = protectedRoutes.some((route) =>
        request.nextUrl.pathname.startsWith(route)
    );
     const isAdminProtected = adminRoutes.some((route) =>
        request.nextUrl.pathname.startsWith(route)
    );
     
    if(!session && isProtectedRoute) {
        const absoluteUrl =  new URL("/",request.nextUrl.origin);
        return NextResponse.redirect(absoluteUrl.toString());
    }

    
    if(!session && isAdminProtected) {
        const absoluteUrl =  new URL("/sign-in",request.nextUrl.origin);
        return NextResponse.redirect(absoluteUrl.toString());
    }
    return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}