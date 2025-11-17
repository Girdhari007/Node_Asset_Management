
import { FastifyInstance } from "fastify";
import { createStore, listStores, getStore } from "../controllers/store";

export default async function storesRoutes(fastify: FastifyInstance) {
  fastify.post("/", createStore);       
  fastify.get("/", listStores);       
  fastify.get("/:id", getStore);        
}
