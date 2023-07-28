import { client } from "../../client/interfaces/client.interface";
export class CreateRestaurantDto {
    id: number;
    name: string;
    address: string;
    capacity: number;
    clients: client[];    
}
