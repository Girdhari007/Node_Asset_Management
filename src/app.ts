
import Fastify from "fastify";
import employeeRoutes from "./routes/employee";
import assetRoutes from "./routes/assets";
import assignmentRoutes from "./routes/assignAssets";
import storesRoutes from "./routes/store";

export function buildServer() {
  const fastify = Fastify({ 
    logger: true,
  });

  fastify.get("/", async () => {
    return { message: "Welcome to the Asset Management Project" };
  });

  fastify.register(storesRoutes, { prefix: "/api/stores" });
  fastify.register(employeeRoutes, { prefix: "/api/employees" });
  fastify.register(assetRoutes, { prefix: "/api/assets" });
  fastify.register(assignmentRoutes, { prefix: "/api/assignments" });

  return fastify;
}
