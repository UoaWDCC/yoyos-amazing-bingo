import { useEffect, useRef } from "react";
import { useSWRConfig } from "swr";

/**
 * Use this to revalidate the cache when the board is updated.
 * This hook should be used on any routes or client components that would involve dynamic revalidation logic.
 * @returns
 */
export function useRevalidationSocket({
  onInvalidation,
}: {
  /**
   * This function will be called when the board is updated.
   * Note: the revalidation logic is baked into the hook, this is just a callback for any additional logic you want to do.
   */
  onInvalidation: (codes: string[]) => void;
}) {
  const wsRef = useRef<WebSocket | null>(null);
  const isConnecting = useRef(false);
  const { mutate } = useSWRConfig();

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

      ws.onmessage = async (event: MessageEvent<string>) => {
        const codes = event.data.split(",");
        mutate(codes);
        onInvalidation(codes);
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
}
