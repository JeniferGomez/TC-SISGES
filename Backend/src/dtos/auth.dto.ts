import { IsString, IsEmail, IsNumber } from 'class-validator';

export class AuthUserDto {
  @IsEmail()
  public mailUser: string;

  @IsString()
  public passwordUser: string;
}