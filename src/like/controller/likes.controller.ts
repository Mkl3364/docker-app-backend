import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { LikeDto } from '../dto/like.dto/like.dto';
import { LikeService } from '../service/like/like.service';

@Controller('likes')
export class LikesController {
  constructor(private likeService: LikeService) {}
  @Post('/')
  create(@Body() like: LikeDto) {
    this.likeService.create(like);
  }

  @Get('/')
  async findAll(): Promise<LikeDto[]> {
    return this.likeService.findAll();
  }

  @Get('/:userId')
  async findById(@Param('userId') userId: number): Promise<LikeDto[]> {
    return this.likeService.findById(userId);
  }
}
