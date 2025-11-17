export interface Asset {
  id?: number;
  store_id: number;
  serial_number: string;
  type: "LAPTOP" | "MONITOR" | "PHONE";
  status: "AVAILABLE" | "ASSIGNED";
}
