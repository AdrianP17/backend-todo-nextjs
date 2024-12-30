import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { registerAuth } from './dto/register-auth.dto';
import { loginAuth } from './dto/login-auth.dto';
import { AuthResponseDto } from './dto/auth-response.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  @ApiOperation({ summary: 'Login and get access token' }) 
  @ApiResponse({ status: 201, description: 'The access token', type: AuthResponseDto })
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
