import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    console.log("hello");

    return NextResponse.json({ message: "Hello" });
  } catch (error) {
    console.error(error);
  }
};
