import { restaurant } from "../../restaurant/interfaces/restaurant.interface";
import { client } from "../../client/interfaces/client.interface";

export class CreateOrdenDto {
    id: number;
    description: string;
    client: client;
    restaurant: restaurant;    
}
