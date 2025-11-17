import { FastifyInstance } from "fastify";
import { createEmployee, getAllEmployees, getEmployeeById } from "../controllers/employee";

export default async function employeeRoutes(fastify: FastifyInstance) {
  fastify.post("/", createEmployee);
  fastify.get("/", getAllEmployees);
  fastify.get("/:id", getEmployeeById);
}
