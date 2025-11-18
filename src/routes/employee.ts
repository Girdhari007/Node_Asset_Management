import { FastifyInstance } from "fastify";
import {zodToJsonSchema} from "zod-to-json-schema";
import {z} from "zod";
import { createEmployeeSchema } from "../schemas/employee";
import { createEmployee, getAllEmployees, getEmployeeById } from "../controllers/employee";

export default async function employeeRoutes(fastify: FastifyInstance) {
  fastify.post("/",
   {
     schema:{
       body: zodToJsonSchema(createEmployeeSchema)
     }
   } 
   , createEmployee);

  fastify.get("/", getAllEmployees);
  
  fastify.get("/:id",
     {
       schema:{
          params: zodToJsonSchema(z.object({
               id: z.number()
          }))
       }
     } 
    , getEmployeeById);
}
