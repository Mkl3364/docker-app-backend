import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LikeDto } from 'src/like/dto/like.dto/like.dto';
import { LikeEntity } from 'src/like/entity/like.entity/like.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class LikeService {
  constructor(
    @InjectRepository(LikeEntity)
    private likesRepository: Repository<LikeEntity>,
    private dataSource: DataSource,
  ) {}
  async create(like: LikeDto) {
    const likeCreated = this.likesRepository.create(like);
    await this.dataSource.transaction(async (manager) => {
      await manager.save(likeCreated);
    });
    return like;
  }

  findAll(): Promise<LikeDto[]> {
    return this.likesRepository.find();
  }

  findById(userId: number): Promise<LikeEntity[] | null> {
    return this.likesRepository.findBy({ userId });
  }

  async remove(id: number): Promise<void> {
    await this.likesRepository.delete(id);
  }
}
