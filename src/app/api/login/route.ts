import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: true,
    message: "游客模式，已自动登录",
    data: {
      success: true,
    },
  });
}
