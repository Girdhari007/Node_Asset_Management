import { FastifyInstance } from "fastify";
import {
  assignAsset,
  getAllAssetsAssigned,
  getEmployeeAssets,
  returnAsset,
  reAssignAsset,
} from "../controllers/assignAssets";
import { z } from "zod";
import { createAssetSchema, 
  updateAssetAssignmentSchema, 
  getallAssignedAssetResponseSchema,
  getAllAssetsAssignedByEmployeeResponseSchema,
  postAssetAssignedResponseUSchema,
  patchAssetReturnedResponseUSchema,
  postAssetReassignedResponseUSchema
} from "../schemas/assignAssets";
import zodToJsonSchema from "zod-to-json-schema";

export default async function assignmentRoutes(fastify: FastifyInstance) {

  fastify.post("/assign",
    {
      schema:{
        body: zodToJsonSchema(createAssetSchema),
        response: {201: zodToJsonSchema(postAssetAssignedResponseUSchema) }     
    }
  }
   , assignAsset);

  fastify.post("/reassign",
    {
      schema:{
        body: zodToJsonSchema(createAssetSchema),
        response: {201: zodToJsonSchema(postAssetReassignedResponseUSchema) }     
      }
    }
   , reAssignAsset);

  fastify.get("/",
     {
        schema:{
             response: {200: zodToJsonSchema(getallAssignedAssetResponseSchema) }
        }
     }  
   , getAllAssetsAssigned);

  fastify.get("/employee/:id",
    {
      schema:{
        params: zodToJsonSchema(z.object({ id: z.number() })),
        response: {200: zodToJsonSchema(getAllAssetsAssignedByEmployeeResponseSchema) }
      }
    }
   , getEmployeeAssets);

  fastify.patch("/return",
    {
      schema:{
        body: zodToJsonSchema(updateAssetAssignmentSchema),
        response: {200: zodToJsonSchema(patchAssetReturnedResponseUSchema) }
      }
    }
   , returnAsset);
}
