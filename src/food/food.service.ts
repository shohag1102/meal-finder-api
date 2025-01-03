/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Food } from './schemas/food.schema';
import { Model } from 'mongoose';
import { CreateFoodDto } from './dtos/insert-food.dto';

@Injectable()
export class FoodService {
  constructor(@InjectModel(Food.name) private foodModel: Model<Food>) {}
  async getAllFoods(): Promise<Food[]> {
    return this.foodModel.find().exec();
  }
  
  insertFood(foodDto: CreateFoodDto): Promise<Food> {
    const createFood = new this.foodModel(foodDto);
    return createFood.save();
  }
}
