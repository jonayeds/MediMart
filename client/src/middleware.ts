import { NextRequest, NextResponse } from "next/server";
import { getUserFromCookies } from "./services/AuthService";
import { IUser } from "./types/user";

const privateRoutes: {customer:string[], admin:string[]} = {
    customer: [
      "/my-cart",
      "/checkout"
    ],
    admin: [
        
    ],
  };

  const authRoutes = ["/login", "/register"];

  export const middleware = async (request: NextRequest) => {
    const user = (await getUserFromCookies()) as IUser || null ;
  
    const { pathname } = request.nextUrl;
    // const match = pathname.match(/^\/my-classes\/([^/]+)$/);
    if (!user && authRoutes?.includes(pathname)) {
      return NextResponse.next();
    }
    if (!user) {
      return NextResponse.redirect(
        new URL(`/login?redirectPath=${pathname}`, request.url)
      );
    } else if (
      !(privateRoutes[user?.role])?.includes(pathname)
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    } else if (authRoutes?.includes(pathname) && user) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  };
  
  export const config = {
    matcher: [
      "/my-cart",
      "/checkout",
      "/profile",
      "/dashboard",
      "/login",
      "/register",
    ],
  };
  