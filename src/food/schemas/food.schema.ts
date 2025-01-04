/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ timestamps: true })
export class Food {
  @ApiProperty({
    example: '52802',
    description: 'The id of the meal',
  })
  @Prop()
  idMeal: string;

  @ApiProperty({
    example: 'Beef Stroganoff',
    description: 'The name of the meal',
  })
  @Prop()
  strMeal: string;

  @ApiProperty({
    example:
      'Beef stroganoff is a Russian dish of sautéed pieces of beef served in a sauce with smetana (sour cream).',
    description: 'The instructions on how to prepare the meal',
  })
  @Prop()
  strInstructions: string;

  @ApiProperty({
    example:
      'https://www.themealdb.com/images/media/meals/w9g73r1560897624.jpg',
    description: 'The thumbnail image of the meal',
  })
  @Prop()
  strMealThumb: string;

  @ApiProperty({
    example: 'Beef,Main,Dinner',
    description: 'The tags associated with the meal',
  })
  @Prop()
  strTags: string;
}

export const FoodSchema = SchemaFactory.createForClass(Food);
