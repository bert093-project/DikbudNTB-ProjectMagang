// app/api/login/route.ts
import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import { createSecretKey } from "crypto";
import bcrypt from "bcryptjs";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

const JWT_SECRET_B64 = process.env.JWT_SECRET_B64!; // secret in base64
const JWT_EXPIRES_IN = Number(process.env.JWT_EXPIRES_IN); // seconds

export async function POST(req: Request) {
  try {
    const { sekolah, password } = await req.json();
    if (!sekolah || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from("dikbud")
      .select("password, sekolah")
      .eq("sekolah", Number(sekolah))
      .limit(1)
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    const match = await bcrypt.compare(password, data.password);
    if (!match)
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );

    // create secret key from base64
    const secretKey = createSecretKey(Buffer.from(JWT_SECRET_B64, "base64"));
    const alg = "HS512";

    const now = Math.floor(Date.now() / 1000);
    const exp = now + JWT_EXPIRES_IN;

    const jwt = await new SignJWT({ sekolah: data.sekolah })
      .setProtectedHeader({ alg })
      .setIssuedAt(now)
      .setExpirationTime(exp)
      .sign(secretKey);

    const res = NextResponse.json(
      { message: "Login success" },
      { status: 200 },
    );

    res.cookies.set({
      name: "token",
      value: jwt,
      httpOnly: true,
      sameSite: "lax", // or "strict" as you prefer
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: JWT_EXPIRES_IN,
    });

    return res;
  } catch (err) {
    console.error("login error", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
