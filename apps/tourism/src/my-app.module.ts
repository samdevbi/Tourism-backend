import { Module } from '@nestjs/common';
import { MyAppController } from './my-app.controller';
import { MyAppService } from './my-app.service';
import { PrismaModule } from 'libs/prisma';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule],
  controllers: [MyAppController],
  providers: [MyAppService],
})
export class MyAppModule { }
