import { FastifyInstance } from "fastify";
import {zodToJsonSchema} from "zod-to-json-schema";
import {z} from "zod";
import { createEmployeeSchema, createEmployeeResponseSchema, getAllEmployeesResponseSchema, getEmployeeByIdResponseSchema} from "../schemas/employee";
import { createEmployee, getAllEmployees, getEmployeeById } from "../controllers/employee";

export default async function employeeRoutes(fastify: FastifyInstance) {
  fastify.post("/",
   {
     schema:{
       body: zodToJsonSchema(createEmployeeSchema),
       response: {201: zodToJsonSchema(createEmployeeResponseSchema) }
     }
   } 
   , createEmployee);

  fastify.get("/", 
    {
      schema:{
        response: {200: zodToJsonSchema(getAllEmployeesResponseSchema) }
      }
    }   
   , getAllEmployees);

  fastify.get("/:id",
     {
       schema:{
          params: zodToJsonSchema(z.object({
               id: z.number()
          })),
          response: {200: zodToJsonSchema(getEmployeeByIdResponseSchema) }
       }
     } 
    , getEmployeeById);
}
