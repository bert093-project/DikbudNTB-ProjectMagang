"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/app/img/logo-dikpora.webp";

import { UserRound, Lock } from "lucide-react";

export default function Home() {
  const [sekolah, setSekolah] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "error" | "success";
    text: string;
  } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    // validasi sederhana
    if (!sekolah.trim() || !password) {
      setMessage({
        type: "error",
        text: "Masukkan kode sekolah dan password.",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sekolah: Number(sekolah), password }),
      });

      const json = await res.json();

      if (!res.ok) {
        setMessage({ type: "error", text: json?.error ?? "Gagal login" });
      } else {
        setMessage({
          type: "success",
          text: json?.message ?? "Login berhasil",
        });
        // contoh: redirect atau simpan token jika kamu menambahkan session
        // router.push('/dashboard')
      }
    } catch (err) {
      setMessage({ type: "error", text: "Terjadi kesalahan jaringan" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-blue-600">
      <div className="flex justify-center items-center min-h-screen">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-center justify-center bg-white shadow-lg xs:w-[80vw] xs:h-[95vh] sm:w-[70vh] sm:h-[95vh] md:w-[30vw] md:h-[95vh] rounded w-[30vw] h-[95vh] p-6"
        >
          <div className="flex justify-center">
            <Image src={logo} alt="logo" width={200} height={200} />
          </div>

          <h1 className="font-medium text-[30px]">Dikpora NTB</h1>

          <div className="text-start mt-4">
            <label className="pl-3">Username / Email</label>
            <div className="relative border-gray-500 border m-3">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <UserRound size={20} />
              </div>
              <input
                type="number"
                inputMode="numeric"
                placeholder="Masukkan email"
                value={sekolah}
                onChange={(e) => setSekolah(e.target.value)}
                className="border border-slate-200 block w-full ps-9 pe-3 py-2.5 transition duration-200 focus:outline-none focus:shadow-sm focus:border-slate-500"
              />
            </div>

            <label className="pl-3">Password</label>
            <div className="relative border-gray-500 border m-3">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <Lock size={20} />
              </div>
              <input
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-slate-200 block w-full ps-9 pe-3 py-2.5 transition duration-200 focus:outline-none focus:shadow-sm focus:border-slate-500"
              />
            </div>
          </div>

          <div className="mt-3 mb-2">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 w-60 h-10 text-white hover:bg-blue-500 hover:shadow-sm transition duration-200 disabled:opacity-60"
            >
              {loading ? "Memeriksa..." : "Login"}
            </button>
          </div>

          {message && (
            <div
              role="status"
              className={`mt-2 text-sm ${message.type === "error" ? "text-red-600" : "text-green-600"}`}
            >
              {message.text}
            </div>
          )}

          <p className="font-light text-base pt-3">
            @2026 Pemerintah Provinsi Nusa Tenggara Barat
          </p>
        </form>
      </div>
    </main>
  );
}