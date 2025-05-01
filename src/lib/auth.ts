import { cookies } from "next/headers";
import { getIronSession } from "iron-session";

import env from "@/lib/env";

export type SessionData = {
  teamId?: string;
};

export const SESSION_OPTIONS = {
  cookieName: "bingo_session",
  password: env.COOKIE_SECRET,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax" as const,
    maxAge: 60 * 60 * 24 * 7,
  },
};

export const getSession = async () => {
  const session = await getIronSession<SessionData>(
    await cookies(),
    SESSION_OPTIONS,
  );
  return session;
};
