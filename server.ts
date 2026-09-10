// import ordersHandler from "./handlers/orders/handler.js";
import healthHandler from "@cookids/server/handlers/health/handler.js";

Bun.serve({
  routes: {
    "/": new Response(Bun.file(new URL("./public/index.html", import.meta.url)), {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    }),
    ...healthHandler
    // ...ordersHandler
  },
  fetch(request, server) {
    const { pathname } = new URL(request.url);
    if (pathname === "/ws" && server.upgrade(request)) {
      return;
    }
    return Response.json(
      {
        "status": "NOT_FOUND"
      },
      {
        status: 404,
        statusText: "NOT_FOUND"
      });
  },
  websocket: {
    message(socket, message) {
      socket.send(message);
    }
  }
});
