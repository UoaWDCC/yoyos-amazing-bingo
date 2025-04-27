import { createServer } from "http";
import { parse } from "url";
import next from "next";

import { initWebSocketServer } from "./ws";

function bootWebsocketServer() {
  const port = parseInt(process.env.PORT || "3000", 10);
  const dev = process.env.NODE_ENV !== "production";
  const app = next({ dev });
  const handle = app.getRequestHandler();

  app.prepare().then(async () => {
    const httpServer = createServer((req, res) => {
      const parsedUrl = parse(req.url!, true);
      handle(req, res, parsedUrl);
    });

    initWebSocketServer(httpServer);

    httpServer.listen(port, async () => {
      console.log(
        `> Server listening at http://localhost:${port} as ${
          dev ? "development" : process.env.NODE_ENV
        }`,
      );
    });
  });
}

declare global {
  // eslint-disable-next-line no-var
  var wsServerRunning: boolean;
}

// Only boot the server once (hot module reloading will cause this to run multiple times)
if (!global.wsServerRunning) {
  global.wsServerRunning = true;
  bootWebsocketServer();
}
