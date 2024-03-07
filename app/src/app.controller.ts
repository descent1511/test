import { Body, Controller, Get, Post, Render, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { title } from 'process';
import { UserService } from './user.service';
import { Response } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
     private readonly userService: UserService,
  ) { }

  @Post('login')
  login(@Body() body: { username: string }, @Res() res: Response) {
    const { username } = body;
    // console.log(username);
    this.userService.setUsername(username);
    return res.redirect('/');
  }

  @Get('/')
  @Render('content/index')
  getIndex() {
    const username = this.userService.getUsername();
    console.log(username);
    return { tittle: 'Index page!', username: username };
  }
  @Get('brand')
  @Render('content/brand')
  getBrand() {
    const username = this.userService.getUsername();
    return { tittle: 'Brand page!', username: username };
  }

  @Get('size')
  @Render('content/size')
  getSize() {
    const username = this.userService.getUsername();
    return { tittle: 'Size page!', username: username };
  }

  @Get('price')
  @Render('content/price')
  getPrice() {
    const username = this.userService.getUsername();
    return { tittle: 'Price page!', username: username };
  }
  @Get('login')
  @Render('content/login')
  getLogin() {
     const username = this.userService.getUsername();
    return { tittle: 'Login page!', username: username };
  }

}


