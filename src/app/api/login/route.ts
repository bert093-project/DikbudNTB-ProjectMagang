import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const sekolah = Number(body.sekolah);
    const password = String(body.password ?? "");

    if (!sekolah || !password) {
      return NextResponse.json(
        { error: "Kode sekolah dan password wajib diisi" },
        { status: 400 },
      );
    }

    const { data, error } = await supabaseAdmin
      .from("dikbud")
      .select("password")
      .eq("sekolah", sekolah)
      .single();

    if (error || !data) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    const hashed = (data as { password: string }).password;
    const match = await bcrypt.compare(password, hashed);

    if (!match) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );
    }

    return NextResponse.json({ message: "Login success" }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
