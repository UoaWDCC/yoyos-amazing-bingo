"use server";

import "server-only";

import { cookies } from "next/headers";
import WebSocket from "ws";

import env from "@/utils/env";

/**
 * Send an invalidation code to the websocket server
 * @param code The invalidation code to send
 */
export async function sendInvalidationCode(code: string) {
  const token = await cookies().then((c) => c.get("bingo_session")?.value);

  const { hostname, port, protocol } = new URL(env.APP_URL);
  const wsProtocol = protocol === "https:" ? "wss:" : "ws:";

  const ws = new WebSocket(
    `${wsProtocol}://${hostname}:${port}/api/ws?invalidate-code=${code}`,
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
