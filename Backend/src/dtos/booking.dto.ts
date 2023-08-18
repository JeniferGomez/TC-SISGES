import { IsString, IsNumber, IsDate, IsEmail, IsDateString } from 'class-validator';

export class CreateBookingDto {

    @IsNumber()
    public typeService: number;

    @IsNumber()
    public typeBooking: number;

    @IsNumber()
    public countBeds: number;

    @IsDateString()
    public dateStart: Date;

    @IsDateString()
    public dateEnd: Date;

    @IsNumber()
    public countChilds: number;

    @IsNumber()
    public countAdults: number;

    @IsString()
    public observations: string;

    @IsString()
    public nameClient: string;

    @IsString()
    public dniClient: string;

    @IsString()
    public phoneClient: string;

    @IsEmail()
    public mailClient: string;

    @IsNumber()
    public stateBooking: number;


    //importante revisar variables de la base de datos
}