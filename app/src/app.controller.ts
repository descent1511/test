import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { title } from 'process';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('content/index')
  getIndex() {
    return { tittle: 'Index page!' };
  }
  @Get('brand')
  @Render('content/brand')
  getBrand() {
    return { tittle: 'Brand page!' };
  }
   
  @Get('size')
  @Render('content/size')
  getSize() {
    return { tittle: 'Size page!' };
  }

  @Get('price')
  @Render('content/price')
  getPrice() {
    return { tittle: 'Price page!' };
  }
  @Get('login')
  @Render('content/login')
  getLogin() {
    return { tittle: 'Login page!' };
  }
}


