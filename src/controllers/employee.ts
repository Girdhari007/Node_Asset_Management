import { FastifyReply, FastifyRequest } from "fastify";
import * as service from "../services/employee";
import { success, error } from "../utils/response";

export const createEmployee = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const result = await service.createEmployee(req.body as any);
    reply.code(201).send(success("Employee created successfully", result));
  } catch (err: any) {
    reply.code(400).send(error("Failed to create employee", err.message));
  }
};

// get all employees
export const getAllEmployees = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const result = await service.getAllEmployees();
    reply.send(success("All employees fetched", result));
  } catch (err: any) {
    reply.status(400).send(error("Failed to fetch employees", err.message));
  }
};

// get employee by id
export const getEmployeeById = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const id = Number((req.params as any).id);
    const result = await service.getEmployeeById(id);
    reply.send(success("Employee fetched", result));
  } catch (err: any) {
    reply.status(400).send(error("Failed to fetch employee", err.message));
  }
};
