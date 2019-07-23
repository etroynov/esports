import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './interfaces/player.interface';

@Injectable()
export class PlayersService {
  constructor(@Inject('PLAYER_MODEL') private readonly playerModel: Model<Player>) {}

  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const createdPlayer = new this.playerModel(createPlayerDto);
    return await createdPlayer.save();
  }

  async findAll(): Promise<Player[]> {
    return await this.playerModel.find().exec();
  }
}
