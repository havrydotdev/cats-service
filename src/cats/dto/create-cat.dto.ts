import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNumber()
  @IsNotEmpty()
  age: number;
  @IsNotEmpty()
  @IsString()
  breed: string;
}
