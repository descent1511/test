import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimingInterceptor } from './Interceptor/time.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserService } from './user.service';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [UserService,AppService,{
    provide: APP_INTERCEPTOR,
    useClass: TimingInterceptor,
  }
],
})
export class AppModule {}
