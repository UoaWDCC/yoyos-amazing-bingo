import "module-alias/register";

import { createServer } from "http";
import path from "path";
import { parse } from "url";
import next from "next";
import { addAliases } from "module-alias";

addAliases({
  "@": path.join(__dirname, "src"),
});

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const httpServer = createServer((req, res) => {
    const parsedUrl = parse(req.url!, true);
    handle(req, res, parsedUrl);
  });

  // We dynamically import the server becase statically importing it
  // causes some issues with env validation, think its to do with
  // the way the server is bundled
  // maybe someone can figure out why and fix it?
  await import("@/lib/ws").then(({ initWebSocketServer }) => {
    initWebSocketServer(httpServer);
  });

  httpServer.listen(port, async () => {
    console.log(
      `> Server listening at http://localhost:${port} as ${
        dev ? "development" : process.env.NODE_ENV
      }`,
    );
  });
});
