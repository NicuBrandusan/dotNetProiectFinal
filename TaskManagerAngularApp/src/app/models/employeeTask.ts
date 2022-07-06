import { Employee } from "./employee";

export interface EmployeeTask
{
    id? : number;
    title?: string;
    duration?: number; 
    summary?: string;
    status?: string;
    employee?: Employee;
    // employee?: Employee["name"];
         
    preparingDelete?: boolean;
    isEditing?: boolean;
}