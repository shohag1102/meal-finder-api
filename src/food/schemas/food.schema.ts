/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Food {
  @Prop()
  idMeal: string;

  @Prop()
  strMeal: string;

  @Prop()
  strInstructions: string;

  @Prop()
  strMealThumb: string;

  @Prop()
  strTags: string;
}

export const FoodSchema = SchemaFactory.createForClass(Food);
