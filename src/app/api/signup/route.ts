import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    success: true,
    message: "游客模式，注册已禁用",
    data: {
      success: true,
    },
  });
}
