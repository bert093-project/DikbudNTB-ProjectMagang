"use client";

import { useState } from "react";

export default function LogoutButton() {
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    try {
      // panggil API logout yang akan menghapus cookie server-side
      const res = await fetch("/api/logout", { method: "POST" });

      // optional: baca respons jika mau menampilkan pesan
      // const json = await res.json();

      // lakukan full reload agar cookie yang sudah dihapus tidak ikut terkirim
      window.location.href = "/";
    } catch (err) {
      // fallback: redirect juga agar user tidak tetap berada di halaman proteksi
      console.error("Logout error", err);
      window.location.href = "/";
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={loading}
      className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-500 disabled:opacity-60 transition"
    >
      {loading ? "Logging out..." : "Logout"}
    </button>
  );
}