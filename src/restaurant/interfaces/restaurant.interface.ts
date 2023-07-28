import { client } from "../../client/interfaces/client.interface";
export interface restaurant {
    id: number;
    name: string;
    address: string;
    capacity: number;
    clients: client[];    
}
