import { httpRouter } from "convex/server";
import { auth } from "./auth";
import { sendEmail } from "./emailActions"; // Path to your email action

const http = httpRouter();

http.route({
  path: "/send-email",
  method: "POST",
  handler: sendEmail,
});

auth.addHttpRoutes(http);

export default http;
