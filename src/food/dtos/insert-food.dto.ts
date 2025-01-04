/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateFoodDto {
  @ApiProperty({
    description: 'The id of the meal',
    example: '52772',
  })
  @IsString()
  @IsNotEmpty()
  idMeal: string;

  @ApiProperty({
    description: 'The name of the meal',
    example: 'Spicy Arrabiata Penne',
  })
  @IsString()
  @IsNotEmpty()
  strMeal: string;

  @ApiProperty({
    description: 'The image link of the meal',
    example:
      'https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg',
  })
  @IsString()
  @IsNotEmpty()
  strMealThumb: string;

  @ApiProperty({
    description: 'The tags associated with the meal',
    example: 'Beef,Main,Dinner',
  })
  @IsString()
  strTags: string;

  @ApiProperty({
    description: 'How the meal is prepared',
    example:
      'Preheat the oven to 200C. Roll out the pastry on a lightly floured surface. Spread the mushroom duxelles over the beef, then wrap in the pastry. Brush with beaten egg and bake for 30 minutes. Slice and serve.',
  })
  @IsString()
  @IsNotEmpty()
  strInstructions: string;
}
