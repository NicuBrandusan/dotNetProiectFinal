import { Project } from "./project";

export interface Employee

{
    id? : number;
    name?: string;
    age?: number; 
    email?: string;    
    phoneNumber?: string;     
    project?: Project;

    preparingDelete?: boolean;
    isEditing?: boolean;
}