import { IncomingMessage, Server, ServerResponse } from "http";
import { getIronSession } from "iron-session";
import { WebSocket, WebSocketServer } from "ws";

import { SESSION_OPTIONS, SessionData } from "@/lib/session";

type WSConnection = WebSocket & {
  teamId?: string;
};

export function initWebSocketServer(httpServer: Server) {
  const wss = new WebSocketServer({
    server: httpServer,
    path: "/api/ws",
  });

  // Store active connections for each team
  const connections = new Map<string, Set<WSConnection>>();

  wss.on("connection", async (ws: WSConnection, req: IncomingMessage) => {
    // Handle initial connection
    try {
      const res = new ServerResponse(req);
      const session = await getIronSession<SessionData>(
        req,
        res,
        SESSION_OPTIONS,
      );

      if (!session.teamId) {
        console.error("No team ID in session");
        ws.close(1000, "Unauthorized");
        return;
      }

      ws.teamId = session.teamId;

      if (!connections.has(session.teamId)) {
        connections.set(session.teamId, new Set());
      }
      connections.get(session.teamId)?.add(ws);

      console.log(connections.get(session.teamId)?.size);

      console.log(`Client connected with team ID: ${session.teamId}`);
    } catch (error) {
      console.error("WebSocket connection error:", error);
      ws.close(1000, "Authentication failed");
      return;
    }

    ws.on("message", async (message: string) => {
      if (!ws.teamId) {
        console.error("No team ID in WebSocket connection");
        ws.close(1000, "Unauthorized");
        return;
      }

      try {
        // TODO: implement message handling and validation

        // Broadcast message to all connections for the team
        const teamConnections = connections.get(ws.teamId);
        if (teamConnections) {
          for (const connection of teamConnections) {
            if (connection.readyState === WebSocket.OPEN) {
              connection.send(message.toString());
            }
          }
        }
      } catch (error) {
        console.error("WebSocket message handling error:", error);
        ws.send(JSON.stringify({ error: "Internal server error" }));
      }
    });

    ws.on("close", () => {
      if (ws.teamId) {
        const teamConnections = connections.get(ws.teamId);
        if (teamConnections) {
          teamConnections.delete(ws);
          if (teamConnections.size === 0) {
            connections.delete(ws.teamId);
          }
        }
        console.log(`Client disconnected with team ID: ${ws.teamId}`);
      }
    });
  });

  return wss;
}
