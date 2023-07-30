
import { IsString , IsObject} from "class-validator";
import { Restaurant } from "../../restaurant/schema/restaurant.sheme";
import { Client } from "../../interfaces/client/dto/client.sheme";

export class CreateOrdenDto {

    @IsString()
    description: string;

    @IsObject()
    client: Client;

    @IsObject()
    restaurant: Restaurant;    
}
