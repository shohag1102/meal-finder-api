/* eslint-disable prettier/prettier */

import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { FoodService } from './food.service';
import { CreateFoodDto } from './dtos/insert-food.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiResponse,
} from '@nestjs/swagger';

@Controller('foods')
export class FoodController {
  constructor(private foodService: FoodService) {}
  @Get()
  @ApiCreatedResponse({
    description: 'success',
  })
  @ApiResponse({
    status: 200,
    description: 'Retrieve all food items',
    schema: {
      example: [
        {
          _id: '6778046f78f432a233961219',
          idMeal: '52802',
          strMeal: 'Beef Wellington',
          strInstructions:
            'Preheat the oven to 200C. Roll out the pastry on a lightly floured surface. Spread the mushroom duxelles over the beef, then wrap in the pastry. Brush with beaten egg and bake for 30 minutes. Slice and serve.',
          strMealThumb:
            'https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg',
          strTags: 'Beef,Main,Dinner',
          createdAt: '2025-01-03T15:38:23.821Z',
          updatedAt: '2025-01-03T15:38:23.821Z',
          __v: 0,
        },
      ],
    },
  })
  getAllFoods() {
    return this.foodService.getAllFoods();
  }
  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateFoodDto,
  })
  @ApiBadRequestResponse({
    description: 'Bad Request.',
  })
  insertFood(@Body(new ValidationPipe()) foodDto: CreateFoodDto): Promise<any> {
    console.log('food ', foodDto);
    return this.foodService.insertFood(foodDto);
  }
}
