import { NextResponse } from "next/server";
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
export default authMiddleware({
  publicRoutes: ["/auth/sign-in", "/auth/sign-up", "/auth/sso-callback"],
  afterAuth (auth, req, evt) {
    if (!auth?.userId && !auth?.isPublicRoute) {
      return redirectToSignIn({returnBackUrl: req.url});
    }
    if (auth?.userId && auth?.isPublicRoute) {
      const homeUrl = new URL("/", req.url);
      console.log(homeUrl);
      return NextResponse.redirect(homeUrl); 
    }
  },
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
