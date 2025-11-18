import { db } from "../config/db";
import { Assignment } from "../models/assignAssets";
import * as assetService from "./assets";

export const assignAsset = async (data: Assignment) => {
  const { employee_id, asset_id } = data;

  const [asset] = await db.query(
    "SELECT status FROM assets WHERE id = ?",
    [asset_id]
  );

  if ((asset as any[]).length === 0) throw new Error("Asset not found");
  if ((asset as any[])[0].status !== "AVAILABLE")
    throw new Error("Asset not available");

  await db.query(
    "INSERT INTO asset_assignments (employee_id, asset_id) VALUES (?, ?)",
    [employee_id, asset_id]
  );

  // mark asset as assigned using asset service helper
  await assetService.markAssigned(asset_id);

  return { message: "Asset Assigned Successfully" };
};

export const getAllAssetsAssigned = async () => {
  const [rows] = await db.query(
    `SELECT 
     aa.id, e.name as employee_name, aa.asset_id, a.status, aa.assigned_at, aa.returned_at
     FROM asset_assignments aa
     JOIN employees e 
     ON aa.employee_id = e.id
     JOIN assets a 
     ON aa.asset_id = a.id`
  );
  return rows;
};

export const getEmployeeAssets = async (employee_id: number) => {
 
  const [rows] = await db.query(
    `SELECT 
     aa.id, aa.employee_id, aa.asset_id, a.serial_number, a.store_id, aa.assigned_at
     FROM asset_assignments aa
     JOIN assets a 
     ON aa.asset_id = a.id
     WHERE aa.employee_id = ? AND aa.returned_at IS NULL`,
    [employee_id]
  );

  return rows;
};

export const returnAsset = async (asset_id: number) => {
  const [result]: any = await db.query(
    `UPDATE asset_assignments 
     SET returned_at = NOW() 
     WHERE asset_id = ? AND returned_at IS NULL`,
    [asset_id]
  );

  if (result.affectedRows === 0)
    throw new Error("No active assignment found for this asset");

  await db.query(`DELETE FROM asset_assignments WHERE asset_id = ? AND returned_at IS NOT NULL`, [asset_id]);

  const asset = await assetService.markAvailable(asset_id);
  return { message: "Asset Returned Successfully", asset };
};

export const reAssignAsset = async (data: Assignment) => {
  const { employee_id, asset_id } = data;

  const [active]: any = await db.query(
    `SELECT id FROM asset_assignments 
     WHERE asset_id = ? AND returned_at IS NULL`,
    [asset_id]
  );

  if (active.length > 0) {
    throw new Error("Asset is already assigned");
  }

  await db.query(
    `INSERT INTO asset_assignments (employee_id, asset_id, assigned_at, returned_at)
     VALUES (?, ?, NOW(), NULL)`,
    [employee_id, asset_id]
  );

  const asset = await assetService.markAssigned(asset_id);

  return { message: "Asset Reassigned Successfully", asset };
};
