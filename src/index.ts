import { buildServer } from "./app";
import dotenv from "dotenv";

dotenv.config();

const server = buildServer();

server.listen({ port: Number(process.env.PORT) || 3000 }, (err, address) => {
  if (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
  console.log("Server running at", address);
});
