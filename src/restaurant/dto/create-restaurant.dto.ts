import { Client } from "../../client/schema/client.sheme";
import { ArrayMaxSize, IsArray, IsNumber, IsString } from 'class-validator';

export class CreateRestaurantDto {
    @IsString()
    name: string;

    @IsString()
    address: string;

    @IsNumber()
    capacity: number;

    @IsArray()
    clients: Client[];    
}
