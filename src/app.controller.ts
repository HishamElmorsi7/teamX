import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

console.log(
'ss'
)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
console.log('z');

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
