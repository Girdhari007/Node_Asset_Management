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