import { IncomingMessage, Server } from "http";
import { WebSocket, WebSocketServer } from "ws";

export function initWebSocketServer(httpServer: Server) {
  const wss = new WebSocketServer({
    server: httpServer,
    path: "/api/ws",
  });

  // Store active connections for each team
  const connections = new Set<WebSocket>();

  wss.on("connection", async (ws: WebSocket, req: IncomingMessage) => {
    // Handle initial connection
    connections.add(ws);

    const code = new URL(
      req.url!,
      `http://${req.headers.host}`,
    ).searchParams.get("invalidate-code");

    // This is kinda hacky, but for our implementation we literally only need to send the code on connect so is fine
    if (code) {
      connections.forEach((connection) => {
        if (connection.readyState === WebSocket.OPEN) {
          connection.send(code);
        }
      });
      ws.close();
    }

    ws.on("close", () => {
      connections.delete(ws);
    });
  });

  return wss;
}
