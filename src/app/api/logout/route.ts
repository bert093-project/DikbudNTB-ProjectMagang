// app/api/logout/route.ts
import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ message: "Logged out" });

  // Hapus cookie token
  res.cookies.delete("token");

  return res;
}