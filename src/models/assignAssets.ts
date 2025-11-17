export interface Assignment {
  id?: number;
  employee_id: number;
  asset_id: number;
  assigned_at?: string;
  returned_at?: string | null;
}
