import { NextRequest, NextResponse } from "next/server";
import {
  getServerSession,
  runWithAmplifyServerContext,
} from "./lib/amplify/amplifyServerUtils";
import { fetchAuthSession } from "aws-amplify/auth/server";

const hrRoutes = ["/hr"];
const tlRoutes = ["/tl"];
const adminRoutes = ["/admin"];

export const middleware = async (request: NextRequest) => {
  const { nextUrl } = request;
  const response = NextResponse.next();

  // const session = await runWithAmplifyServerContext({
  //   nextServerContext: { request, response },
  //   operation: async (contextSpec) =>
  //     (await fetchAuthSession(contextSpec)) || undefined,
  // });

  // console.log(session.tokens);
};

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
