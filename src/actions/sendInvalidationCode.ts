"use server";

import "server-only";

import { cookies } from "next/headers";
import WebSocket from "ws";

/**
 * Send an invalidation code to the websocket server
 * @param code The invalidation code to send
 */
export async function sendInvalidationCode(code: string) {
  const token = await cookies().then((c) => c.get("bingo_session")?.value);

  const ws = new WebSocket(
    `ws://localhost:3000/api/ws?invalidate-code=${code}`,
    {
      headers: {
        Cookie: `bingo_session=${token}`,
      },
    },
  );

  ws.onopen = () => {
    ws.close();
  };
}
