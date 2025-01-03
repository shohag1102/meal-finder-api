/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateFoodDto {
  @IsString()
  @IsNotEmpty()
  idMeal: string;
  @IsString()
  @IsNotEmpty()
  strMeal: string;
  @IsString()
  @IsNotEmpty()
  strMealThumb: string;

  @IsString()
  strTags: string;

  @IsString()
  @IsNotEmpty()
  strInstructions: string;
}
