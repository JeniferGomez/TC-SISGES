import { IsString, IsNumber, IsDate, IsDateString } from 'class-validator';

export class CreateInventaryDto {

    @IsString()
    public nameElement: string;

    @IsNumber()
    public typeElement: number;

    @IsNumber()
    public countElement: number;

    @IsNumber()
    public stateElement: number;

    @IsString()
    public valueElement: string;

    @IsNumber()
    public dependencyElement: number;

    @IsDateString()
    public dateStart: Date;

    @IsString()
    public descriptionElement: string;

    //importante revisar variables de la base de datos
}