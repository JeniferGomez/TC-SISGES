import { IsString, IsNumber, IsDateString } from "class-validator";

export class CreateBillingDto {
    
        @IsString()
        public nameClient: string;
    
        @IsDateString()
        public dateBilling: Date;
    
        @IsNumber()
        public productsBilling: number;
    
        @IsNumber()
        public totalBilling: number;
    
        @IsNumber()
        public stateBilling: number;
    
        @IsString()
        public descriptionBilling: string;
    
}