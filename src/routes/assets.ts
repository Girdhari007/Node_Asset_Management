import { FastifyInstance } from "fastify";
import { createAsset, getAllAssets, getAssetById } from "../controllers/assets";
import { createAssetSchema,GetAssetByIdResponse, CreateAssetResponseSchema, GetAllAssetsResponse} from "../schemas/assets";
import { zodToJsonSchema } from "zod-to-json-schema";
import { z } from "zod";

export default async function assetsRoutes(fastify: FastifyInstance) {

  fastify.post("/",
    { 
      schema: { 
      body: zodToJsonSchema(createAssetSchema),
      response: {201: zodToJsonSchema(CreateAssetResponseSchema) }
     } 
    },  createAsset);

  fastify.get("/", 
    {
      schema:{
         response: {200: zodToJsonSchema(GetAllAssetsResponse) }
      }
    } 
   , getAllAssets);

  fastify.get("/:id",
    {
      schema:{
        params: zodToJsonSchema(z.object({ id: z.number() })),
        response: {200: zodToJsonSchema(GetAssetByIdResponse) }
      }
    }
    , getAssetById);
}
