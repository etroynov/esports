import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreatePlayerDto } from './dto/create-player.dto';
import { Player } from './interfaces/player.interface';

@Injectable()
export class PlayersService {
  constructor(
    @Inject('PLAYER_MODEL') private readonly playerModel: Model<Player>
  ) {}

  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    try {
      const createdPlayer = new this.playerModel(createPlayerDto);
      const res = await createdPlayer.save();

      return res;
    } catch(e) {
      console.error(e);
    }
  }

  async find(id: string): Promise<Player[]> {
    return await this.playerModel.find({ _id: id }).exec();
  }

  async findAll(): Promise<Player[]> {
    return await this.playerModel.find().exec();
  }
}
