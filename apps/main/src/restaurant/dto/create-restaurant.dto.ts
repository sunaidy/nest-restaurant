import { IsArray, IsNumber, IsString, Validate } from 'class-validator';
import { Client } from '../../interfaces/client/dto/client.sheme';
import { MaxLengthArrayValidator } from '../validation/max-length-array.validator';

export class CreateRestaurantDto {
    @IsString()
    name: string;

    @IsString()
    address: string;

    @IsNumber()
    capacity: number;

    @IsArray()
    @Validate(MaxLengthArrayValidator, ['Maximo clientes permitido']) 
    clients: Client[];    
}
