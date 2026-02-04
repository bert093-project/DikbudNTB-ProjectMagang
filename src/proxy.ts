// src/proxy.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";
import { createSecretKey } from "crypto";

const JWT_SECRET_B64 = process.env.JWT_SECRET_B64!;

export async function proxy(request: NextRequest) {
  // Protect routes under /pages
  if (request.nextUrl.pathname.startsWith("/pages")) {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    try {
      const secretKey = createSecretKey(Buffer.from(JWT_SECRET_B64, "base64"));
      // jwtVerify akan melempar jika signature invalid atau expired
      await jwtVerify(token, secretKey, { algorithms: ["HS512"] });
      return NextResponse.next(); // valid
    } catch (err) {
      // invalid/expired token
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/pages/:path*"],
};