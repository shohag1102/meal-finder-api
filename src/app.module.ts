/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FoodModule } from './food/food.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://selise:selise@selise-attachment.jq2br.mongodb.net/meal-finder',
    ),
    FoodModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
