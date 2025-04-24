import type { NextApiRequest, NextApiResponse } from "next";
import { hash } from "bcrypt";
import pool from "@/lib/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  const client = await pool.connect();
  try {
    const existing = await client.query('SELECT * FROM users WHERE email = $1', [email]);
    if (existing.rows.length > 0) {
      return res.status(409).json({ message: "User already exists" });
    }
    const hashed = await hash(password, 10);
    await client.query('INSERT INTO users (email, password) VALUES ($1, $2)', [email, hashed]);
    return res.status(201).json({ message: "User created" });
  } finally {
    client.release();
  }
}
