import { FastifyInstance } from "fastify";
import {z} from "zod";
import {zodToJsonSchema} from "zod-to-json-schema";
import { createStoreSchema } from "../schemas/store";
import { createStore, listStores, getStore } from "../controllers/store";

export default async function storesRoutes(fastify: FastifyInstance) {
  fastify.post("/",
   {
    schema:{
       body: zodToJsonSchema(createStoreSchema)
    }
   } 
   , createStore);
   
  fastify.get("/", listStores);

  fastify.get("/:id", 
   {
     schema:{
         params: zodToJsonSchema(z.object(
               {
                id: z.number()
               }
         ))
     }
   }
  , getStore);
}
