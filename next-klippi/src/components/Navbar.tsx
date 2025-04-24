import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import React from "react";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  return (
    <nav className="w-full flex justify-between items-center p-4 border-b border-gray-200">
      <div className="font-bold text-xl">
        <Link href="/">Klippi</Link>
      </div>
      <div className="flex gap-4 items-center">
        {session?.user ? (
          <>
            <span>{session.user.email}</span>
            <Link href="/dashboard">Dashboard</Link>
            <form action="/api/auth/signout" method="post">
              <button type="submit" className="ml-2 px-3 py-1 rounded bg-gray-200 hover:bg-gray-300">Sign out</button>
            </form>
          </>
        ) : (
          <>
            <Link href="/auth/login" className="px-3 py-1 rounded bg-blue-600 text-white">Login</Link>
            <Link href="/auth/signup" className="px-3 py-1 rounded bg-gray-200">Sign up</Link>
          </>
        )}
      </div>
    </nav>
  );
}
