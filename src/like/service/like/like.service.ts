import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LikeDto } from 'src/like/dto/like.dto/like.dto';
import { LikeEntity } from 'src/like/entity/like.entity/like.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(LikeEntity)
    private likesRepository: Repository<LikeEntity>,
  ) {}
  create(like: LikeDto) {
    this.likesRepository.create(like);
    return like;
  }

  findAll(): Promise<LikeDto[]> {
    return this.likesRepository.find();
  }

  async remove(id: number): Promise<void> {
    await this.likesRepository.delete(id);
  }
}
