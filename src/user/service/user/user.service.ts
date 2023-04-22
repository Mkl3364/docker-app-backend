import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/user/dto/user.dto/user.dto';
import { User } from 'src/user/user.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private dataSource: DataSource,
  ) {}

  async create(user: UserDto): Promise<UserDto> {
    const userCreated = this.usersRepository.create(user);
    await this.dataSource.transaction(async (manager) => {
      await manager.save(userCreated);
    });
    return userCreated;
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findById(id: number): Promise<UserDto | null> {
    return this.usersRepository.findOneBy({ id });
  }

  findByUsername(firstName: string): Promise<UserDto | null> {
    return this.usersRepository.findOneBy({ firstName });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
