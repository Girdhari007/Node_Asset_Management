 import {z} from "zod";

export const createEmployeeSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  department: z.string().min(1),
  store_id: z.number()
});
