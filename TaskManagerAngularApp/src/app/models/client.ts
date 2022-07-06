export interface Client

{
    id? : number;
    name?: string;
    company?: string;     
    email?: string;

    preparingDelete?: boolean;
    isEditing?: boolean;
}
