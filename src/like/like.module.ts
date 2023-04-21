import { Module } from '@nestjs/common';
import { LikesController } from './controller/likes.controller';
import { LikeService } from './service/like/like.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LikeEntity } from './entity/like.entity/like.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LikeEntity])],
  controllers: [LikesController],
  providers: [LikeService],
})
export class LikeModule {}
