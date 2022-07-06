export interface Plant

{
    id? : number;
    name?: string;
    address?: string;     

    preparingDelete?: boolean;
    isEditing?: boolean;
}
