export interface ClientType {
  name?: string;
  email?: string;
  phone?: string;
  id: string;
}

export enum StatusType {
  new = "Not Started",
  progress = "In Progress",
  completed = "Completed",
}
export interface ProjectType {
  id: string;
  name?: string;
  description?: string;
  status?: StatusType;
  clientId?: string;
}
