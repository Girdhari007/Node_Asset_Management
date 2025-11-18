import {z} from "zod";

export const createStoreSchema = z.object({
  id: z.number().optional(),
  store_name: z.string()
})