import { db } from "../config/db";
import { Employee } from "../models/employee";

export const createEmployee = async (data: Employee) => {
  const { name, email, department, store_id } = data;

  const [exists] = await db.query(
    "SELECT id FROM employees WHERE email = ?",
    [email]
  );

  if ((exists as any[]).length > 0) throw new Error("Email already exists");

  const [result] = await db.query(
    "INSERT INTO employees (name, email, department, store_id) VALUES (?, ?, ?, ?)",
    [name, email, department, store_id]
  );

  return { id: (result as any).insertId, ...data };
};

// get all employees
export const getAllEmployees = async () => {
  const [rows] = await db.query(
    "SELECT id, name, email, department, store_id FROM employees"
  );
  if ((rows as any[]).length === 0) throw new Error("Employee not found");
  return rows;
};
// get employee by id
export const getEmployeeById = async (id: number) => {
  const [rows] = await db.query(
    "SELECT id, name, email, department, store_id FROM employees WHERE id = ?",
    [id]
  );

  if ((rows as any[]).length === 0) throw new Error("Employee not found");
  return (rows as any[])[0];
};
