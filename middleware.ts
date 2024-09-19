import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "./lib/amplify/amplifyServerUtils";

const hrRoutes = ["/hr"];
const tlRoutes = ["/tl"];
const adminRoutes = ["/admin"];

export const middleware = async (request: NextRequest) => {
  const { nextUrl } = request;
  const response = NextResponse.next();

  // const session = await getServerSession();

  // if (!session) return;

  // const groups = Array(session.tokens?.accessToken.payload["cognito:groups"]);

  // const isHrRoute = hrRoutes.includes(nextUrl.pathname);
  // const isTlRoute = tlRoutes.includes(nextUrl.pathname);
  // const isAdminRoute = adminRoutes.includes(nextUrl.pathname);

  // if (isHrRoute && !groups.includes("hr")) {
  //   return NextResponse.redirect(new URL("/", nextUrl));
  // }

  // if (isTlRoute && !groups.includes("tl")) {
  //   return NextResponse.redirect(new URL("/", nextUrl));
  // }

  // if (isAdminRoute && !groups.includes("admin")) {
  //   return NextResponse.redirect(new URL("/", nextUrl));
  // }
};

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
