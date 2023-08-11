import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './categories/categories.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    PlayersModule,
    MongooseModule.forRoot(process.env.MONGODB_CONNECTION_STRING),
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
