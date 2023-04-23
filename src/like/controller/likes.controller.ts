import { Controller, Post, Get, Body } from '@nestjs/common';
import { LikeDto } from '../dto/like.dto/like.dto';
import { LikeService } from '../service/like/like.service';

@Controller('likes')
export class LikesController {
  constructor(private likeService: LikeService) {}
  @Post('/')
  create(@Body() like: LikeDto): LikeDto {
    return this.likeService.create(like);
  }

  @Get('/')
  async findAll(): Promise<LikeDto[]> {
    return this.likeService.findAll();
  }
}
