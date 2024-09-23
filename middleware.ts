import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "./lib/amplify/amplifyServerUtils";

const hrRoutes = ["/hr"];
const tlRoutes = ["/tl"];
const adminRoutes = ["/admin"];

export const middleware = async (request: NextRequest) => {
  const { nextUrl } = request;
  const response = NextResponse.next();

  // const session = await getServerSession();

  // console.log(session);
};

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
