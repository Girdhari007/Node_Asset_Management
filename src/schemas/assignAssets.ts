import {z} from "zod";
 
export const  createAssetSchema = z.object({ 
    id: z.number().optional(),
    asset_id: z.number(),
    employee_id: z.number(),
    assigned_at: z.string().optional(),
    returned_at: z.string().nullable().optional(),
});

export const updateAssetAssignmentSchema = z.object({
     asset_id : z.number()
});

//Response Schemas
//error response schema
export const errorResponseSchema = z.object({
    success: z.literal(false),
    message: z.string(),
    error: z.any().optional()
});

// Schema for getting all assigned assets
export const allAssignedAssetSchema = z.object({
  id: z.number(),
  employee_name: z.string(),
  asset_id: z.number(),
  status: z.string(),
  assigned_at: z.string(),
  returned_at: z.string().nullable().optional()
});

export const allAssignedAssetsResponseSchema = z.object({
  success: z.literal(true),
  message: z.string(),
  data: z.array(allAssignedAssetSchema)
});

export const getallAssignedAssetResponseSchema = z.union([
  allAssignedAssetsResponseSchema,
  errorResponseSchema
]);

// Schema for getting all asset assignments by employee
export const getAssetAssignedByEmployeeResponseSchema = z.object({
             id: z.number(),
            employee_id: z.number(),
            asset_id: z.number(),
            serial_number: z.string(),
            store_id: z.number(),
            assigned_at: z.string(),
            returned_at: z.string().nullable().optional()
});
export const getALLAssetAssigedByEmployeeResponseSchema = z.object({
    success: z.literal(true),
    message: z.string(),
    data: z.array(getAssetAssignedByEmployeeResponseSchema)
});
export const getAllAssetsAssignedByEmployeeResponseSchema = z.union([
    getALLAssetAssigedByEmployeeResponseSchema,
    errorResponseSchema
]);

// Schema for asset returned response
export const assetSchema = z.object({
  id: z.number(),
  store_id: z.number(),
  serial_number: z.string(),
  type: z.string(),
  status: z.string()
});

//asset assigned response
export const assetAssignedResponseSchema = z.object({
  success: z.literal(true),
  message: z.string(),
  data: assetSchema
});
export const postAssetAssignedResponseUSchema = z.union([
  assetAssignedResponseSchema,
  errorResponseSchema
]);

//asset returned response
export const assetReturnedResponseSchema = z.object({
  success: z.literal(true),
  message: z.string(),
  data: assetSchema
});
export const patchAssetReturnedResponseUSchema = z.union([
  assetReturnedResponseSchema,
  errorResponseSchema
]);

// Schema for asset reassigned response
export const assetReassignedResponseSchema = z.object({
  success: z.literal(true),
  message: z.string(),
  data: assetSchema
});
export const postAssetReassignedResponseUSchema = z.union([
  assetReassignedResponseSchema,
  errorResponseSchema
]);

