import { z } from "zod";

//create schema
export const createStoreSchema = z.object({
  id: z.number().optional(),
  store_name: z.string()
});

//response schemas
export const errorResponseSchema = z.object({
  success: z.literal(false),
  message: z.string()
});

export const storeSchema = z.object({
  id: z.number().optional(),
  store_name: z.string()
});

// GET /stores/:id
export const getStoreByIdResponseSchema = z.object({
  success: z.literal(true),
  message: z.string(),
  data: storeSchema
});

// POST /stores
export const createStoreResponseSchema = z.object({
  success: z.literal(true),
  message: z.string(),
  data: storeSchema
});

// GET /stores
export const getAllStoresResponseSchema = z.object({
  success: z.literal(true),
  message: z.string(),
  data: z.array(storeSchema)
});
