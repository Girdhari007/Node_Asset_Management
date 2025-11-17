import { FastifyInstance } from "fastify";
import {
  assignAsset,
  getAllAssetsAssigned,
  getEmployeeAssets,
  // returnAsset,
} from "../controllers/assignAssets";

export default async function assignmentRoutes(fastify: FastifyInstance) {
  fastify.post("/assign", assignAsset);
  fastify.get("/", getAllAssetsAssigned);
  fastify.get("/employee/:id", getEmployeeAssets);
  // fastify.patch("/return", returnAsset); 
}
