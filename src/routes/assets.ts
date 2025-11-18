import { FastifyInstance } from "fastify";
import { createAsset, getAllAssets, getAssetById } from "../controllers/assets";
import { createAssetSchema} from "../schemas/assets";
import { zodToJsonSchema } from "zod-to-json-schema";
import { z } from "zod";

export default async function assetsRoutes(fastify: FastifyInstance) {
  fastify.post("/",
    { 
      schema: { 
      body: zodToJsonSchema(createAssetSchema)
     } 
    },  createAsset);
  fastify.get("/", getAllAssets);
  fastify.get("/:id",
    {
      schema:{
        params: zodToJsonSchema(z.object({
          id: z.number(),
        })) 
      }
    }
    , getAssetById);
}
