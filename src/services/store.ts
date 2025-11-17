// src/services/stores.service.ts
import { db } from "..//config/db";
import { Store } from "../models/store";

export const createStore = async (data: Store) => {
  const { store_name } = data;
  const [exists] = await db.query("SELECT id FROM stores WHERE store_name = ?", [store_name]);
  if ((exists as any[]).length > 0) throw new Error("Store already exists");
  const [result] = await db.query("INSERT INTO stores (store_name) VALUES (?)", [store_name]);
  return { id: (result as any).insertId, store_name };
};

export const getStores = async () => {
  const [rows] = await db.query("SELECT id, store_name FROM stores");
  return rows;
};

export const getStoreById = async (id: number) => {
  const [rows] = await db.query("SELECT id, store_name FROM stores WHERE id = ?", [id]);
  return (rows as any[])[0] ?? null;
};
