import { useCallback, useEffect, useRef } from "react";

import { type Board } from "@/models/Board";

interface BoardWebSocketMessage {
  type: "BOARD_UPDATE";
  board: Board;
}

export function useBoardWebSocket(onBoardUpdate: (board: Board) => void) {
  const wsRef = useRef<WebSocket | null>(null);
  const isConnecting = useRef(false);

  useEffect(() => {
    // Prevent multiple simultaneous connection attempts
    if (wsRef.current || isConnecting.current) {
      return;
    }

    const connect = () => {
      if (isConnecting.current) return;
      isConnecting.current = true;

      // Create WebSocket connection
      const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
      const ws = new WebSocket(`${protocol}//${window.location.host}/api/ws`);

      ws.onopen = () => {
        console.log("WebSocket connection established");
        isConnecting.current = false;
        wsRef.current = ws;
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data) as BoardWebSocketMessage;
          if (data.type === "BOARD_UPDATE") {
            onBoardUpdate(data.board);
          }
        } catch (error) {
          console.error("Error parsing WebSocket message:", error);
        }
      };

      ws.onclose = (event) => {
        console.log("WebSocket connection closed", event.code, event.reason);
        wsRef.current = null;
        isConnecting.current = false;
      };

      ws.onerror = (error) => {
        console.error("WebSocket error:", error);
        wsRef.current = null;
        isConnecting.current = false;
      };
    };

    connect();

    // Cleanup on unmount
    return () => {
      isConnecting.current = false;
      if (wsRef.current?.readyState === WebSocket.OPEN) {
        wsRef.current.close();
        wsRef.current = null;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    sendMessage: useCallback((message: BoardWebSocketMessage) => {
      if (wsRef.current?.readyState === WebSocket.OPEN) {
        wsRef.current.send(JSON.stringify(message));
      } else {
        console.warn("WebSocket is not connected");
      }
    }, []),
  };
}
