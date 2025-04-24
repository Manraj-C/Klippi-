import type { NextApiRequest, NextApiResponse } from "next";
import pool from "@/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await pool.connect();
    await client.query("SELECT 1");
    client.release();
    res.status(200).json({ ok: true, message: "Database connection successful" });
  } catch (err) {
    res.status(500).json({ ok: false, error: (err as Error).message });
  }
}
