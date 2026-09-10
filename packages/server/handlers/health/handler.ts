import { defineFetchHandler } from "../../http/defineFetchHandler.js";

export default defineFetchHandler({
  path: "/health",
  method: "GET",
  handler() {
    return Response.json({ status: "OK" });
  }
});