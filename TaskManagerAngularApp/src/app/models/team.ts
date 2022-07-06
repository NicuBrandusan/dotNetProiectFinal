export interface Team
{
    id? : number;
    name?: string;
    department?: string; 
         
    preparingDelete?: boolean;
    isEditing?: boolean;
}