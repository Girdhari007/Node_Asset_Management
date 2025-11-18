import { db } from "../config/db";
import { Asset } from "../models/assets";

export const createAsset = async (data: Asset) => {
  const { store_id, serial_number, type } = data;

  const [exists] = await db.query(
    "SELECT id FROM assets WHERE serial_number = ?",
    [serial_number]
  );

  if ((exists as any[]).length > 0) throw new Error("Serial number already exists");

  const [result] = await db.query(
    "INSERT INTO assets (store_id, serial_number, type) VALUES (?, ?, ?)",
    [store_id, serial_number, type]
  );

  return { id: (result as any).insertId, ...data, status: "AVAILABLE" };
};

//get all assets
export const getAllAssets = async (status?: string) => {
  //filter for status
   if (status) {
    const [rows] = await db.query(
      "SELECT * FROM assets WHERE status = ?",
      [status]
    );
    return rows;
  }

  const [rows] = await db.query("SELECT * FROM assets");
  return rows as Asset[];
}

//get asset by id
export const getAssetById = async (id: number) => {
  const [rows] = await db.query("SELECT * FROM assets WHERE id = ?", [id]);
  if ((rows as any[]).length === 0) throw new Error("Asset not found");
  return (rows as any[])[0] as Asset;
}

export const markAvailable = async (asset_id: number) => {
  await db.query(`UPDATE assets SET status='AVAILABLE' WHERE id=?`, [asset_id]);
  const [rows] = await db.query("SELECT * FROM assets WHERE id = ?", [asset_id]);
  if ((rows as any[]).length === 0) throw new Error("Asset not found");
  return (rows as any[])[0] as Asset;
};

export const markAssigned = async (asset_id: number) => {
  await db.query(`UPDATE assets SET status='ASSIGNED' WHERE id=? and status='AVAILABLE'`, [asset_id]);
  const [rows] = await db.query("SELECT * FROM assets WHERE id = ? and status='ASSIGNED'", [asset_id]);
  if ((rows as any[]).length === 0) throw new Error("Asset not found");
  return (rows as any[])[0] as Asset;
};
