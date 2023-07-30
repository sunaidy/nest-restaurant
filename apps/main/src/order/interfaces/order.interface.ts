import { Iclient } from "../../interfaces/client/interface/client.interface";
import { Irestaurant } from "../../restaurant/interfaces/restaurant.interface";

export interface order {
    id: number;
    description: string;
    client: Iclient;
    restaurant: Irestaurant;   
}
