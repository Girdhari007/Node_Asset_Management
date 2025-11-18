import { FastifyInstance } from "fastify";
import {
  assignAsset,
  getAllAssetsAssigned,
  getEmployeeAssets,
  returnAsset,
  reAssignAsset,
} from "../controllers/assignAssets";
import { z } from "zod";
import { createAssetSchema, updateAssetAssignmentSchema } from "../schemas/assignAssets";
import zodToJsonSchema from "zod-to-json-schema";

export default async function assignmentRoutes(fastify: FastifyInstance) {
  fastify.post("/assign",
    {
      schema:{
        body: zodToJsonSchema(createAssetSchema)      
    }
  }
   , assignAsset);
  fastify.post("/reassign",
    {
      schema:{
        body: zodToJsonSchema(createAssetSchema)
      }
    }
   , reAssignAsset);
  fastify.get("/", getAllAssetsAssigned);
  fastify.get("/employee/:id",
    {
      schema:{
        params: zodToJsonSchema(z.object({
          id: z.number(),
        })) 
      }
    }
   , getEmployeeAssets);
  fastify.patch("/return",
    {
      schema:{
        body: zodToJsonSchema(updateAssetAssignmentSchema)
      }
    }
   , returnAsset);
}
