import { IsObject, IsString } from 'class-validator';
import { Client } from "../../client/schema/client.sheme";
import { Restaurant } from "../../restaurant/schema/restaurant.sheme";

export class CreateOrdenDto {

    @IsString()
    description: string;

    @IsObject()
    client: Client;

    @IsObject()
    restaurant: Restaurant;    
}
