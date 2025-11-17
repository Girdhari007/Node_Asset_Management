import { FastifyInstance } from "fastify";
import { createAsset, getAllAssets, getAssetById } from "../controllers/assets";

export default async function assetsRoutes(fastify: FastifyInstance) {
  fastify.post("/", createAsset);
  fastify.get("/",getAllAssets);
  fastify.get("/:id", getAssetById);
}
