import { Client } from "./client";
import { Plant } from "./plant";

export interface Project
{
    id? : number;
    name?: string;
    description?: string; 
    client?: Client;
    plant?: Plant;
         
    preparingDelete?: boolean;
    isEditing?: boolean;

    
}