/* eslint-disable prettier/prettier */

import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodDto } from './dtos/insert-food.dto';

@Controller('foods')
export class FoodController {
  constructor(private foodService: FoodService) {}
  @Get()
  getAllFoods() {
    return this.foodService.getAllFoods();
  }
  @Post()
  insertFood(@Body(new ValidationPipe()) foodDto: CreateFoodDto): Promise<any> {
    console.log('food ', foodDto);
    return this.foodService.insertFood(foodDto);
  }
}
