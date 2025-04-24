import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import pool from "@/lib/db";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const client = await pool.connect();
        try {
          const res = await client.query('SELECT * FROM users WHERE email = $1', [credentials.email]);
          const user = res.rows[0];
          if (user && await compare(credentials.password, user.password)) {
            return { id: user.id, email: user.email };
          }
          return null;
        } finally {
          client.release();
        }
      }
    })
  ],
  session: { strategy: "jwt" as const },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
