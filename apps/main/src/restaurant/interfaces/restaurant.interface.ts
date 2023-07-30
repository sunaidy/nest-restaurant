import { Iclient } from "../../interfaces/client/interface/client.interface";

export interface Irestaurant {
    id: number;
    name: string;
    address: string;
    capacity: number;
    clients: Iclient[];    
}
