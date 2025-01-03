/* eslint-disable prettier/prettier */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { ExpressAdapter } from '@nestjs/platform-express';

async function bootstrap() {
  const server = express();
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  // await app.listen(process.env.PORT ?? 3000);
  await app.init();

  return server;
}
// bootstrap();
bootstrap().then((server) => server.listen(3000));
