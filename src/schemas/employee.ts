 import {z} from "zod";

export const createEmployeeSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  email: z.string().email(),
  department: z.string().min(1),
  store_id: z.number()
});

export const employeeSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  email: z.string(),
  department: z.string(),
  store_id: z.number()
});

// GET /employees
export const getAllEmployeesResponseSchema = z.object({
  success: z.literal(true),
  message: z.string(),
  data: z.array(employeeSchema)
});

// GET /employees/:id
export const getEmployeeByIdResponseSchema = z.object({
  success: z.literal(true),
  message: z.string(),
  data: employeeSchema
});

// POST /employees
export const createEmployeeResponseSchema = z.object({
  success: z.literal(true),
  message: z.string(),
  data: employeeSchema
});