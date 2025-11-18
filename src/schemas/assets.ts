import {z} from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
 
export const  createAssetSchema = z.object({
  id: z.number().optional(),
  store_id: z.number(),
  serial_number: z.string(),
  type: z.enum(["LAPTOP", "MONITOR", "PHONE"]),
  status: z.enum(["AVAILABLE", "ASSIGNED"]).optional(),
});
