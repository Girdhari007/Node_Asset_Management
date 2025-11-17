import { db } from "../config/db";
import { Assignment } from "../models/assignAssets";

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

  await db.query("UPDATE assets SET status='ASSIGNED' WHERE id=?", [asset_id]);

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
     aa.id, aa.employee_id, a.serial_number, a.type, a.store_id, aa.assigned_at
     FROM asset_assignments aa
     JOIN assets a 
     ON aa.asset_id = a.id
     WHERE aa.employee_id = ? AND aa.returned_at IS NULL`,
    [employee_id]
  );

  return rows;
};

// export const returnAsset = async (asset_id: number) => {
//   await db.query(
//     `UPDATE asset_assignments SET returned_at = NOW() WHERE asset_id = ? AND returned_at IS NULL`,
//     [asset_id]
//   );

//   await db.query(`UPDATE assets SET status='AVAILABLE' WHERE id=?`, [asset_id]);

//   return { message: "Asset Returned Successfully" };
// };
