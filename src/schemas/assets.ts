import {z} from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
 
export const  createAssetSchema = z.object({
  id: z.number().optional(),
  store_id: z.number(),
  serial_number: z.string(),
  type: z.enum(["LAPTOP", "MONITOR", "PHONE"]),
  status: z.enum(["AVAILABLE", "ASSIGNED"]).optional(),
});

//schemas for responses
export const AssetSchema = z.object({
  id: z.number().optional(),
  store_id: z.number(),
  serial_number: z.string(),
  type: z.enum(["LAPTOP", "MONITOR", "PHONE"]),
  status: z.enum(["AVAILABLE", "ASSIGNED"]).optional(),
});

export const SuccessResponseSchema = z.object({
  success: z.literal(true),
  message: z.string(),
  data: AssetSchema.optional(),
});

export const ErrorResponseSchema = z.object({
  success: z.literal(false),
  message: z.string(),
  error: z.any().optional(),
});

export const CreateAssetResponseSchema = z.union([
  SuccessResponseSchema,
  ErrorResponseSchema,
]);

//schemas for get all assets response
const GetAllAssetsSuccessSchema = z.object({
  success: z.literal(true),
  message: z.string(),
  data: z.array(AssetSchema)
});

const GetAllAssetsErrorSchema = z.object({
  success: z.literal(false),
  message: z.string(),
  error: z.any().optional()
});

export const GetAllAssetsResponse = z.union([
  GetAllAssetsSuccessSchema,
  GetAllAssetsErrorSchema
]);

//schemas for get by id asset
const GetAssetByIdSuccess = z.object({
  success: z.literal(true),
  message: z.string(),
  data: AssetSchema
});

const GetAssetByIdError = z.object({
  success: z.literal(false),
  message: z.string(),
  error: z.any().optional(),
});

export const GetAssetByIdResponse = z.union([
  GetAssetByIdSuccess,
  GetAssetByIdError,
]);

