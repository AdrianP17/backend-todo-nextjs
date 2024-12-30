import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { registerAuth } from './dto/register-auth.dto';
import { loginAuth } from './dto/login-auth.dto';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: loginAuth) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @Post('register')
  registerUser(@Body() userObject : registerAuth ) {
    return this.authService.register(userObject)
  }


  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user
  }
}
