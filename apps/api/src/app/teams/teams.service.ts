import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateTeamDto } from './dto/create-team.dto';
import { Team } from './interfaces/team.interface';

@Injectable()
export class TeamsService {
  constructor(
    @Inject('TEAM_MODEL') private readonly teamModel: Model<Team>
  ) {}

  async create(createTeamDto: CreateTeamDto): Promise<Team> {
    try {
      const createdTeam = new this.teamModel(createTeamDto);
      const res = await createdTeam.save();

      return res;
    } catch(e) {
      console.error(e);
    }

  }

  async find(id: string): Promise<Team[]> {
    return await this.teamModel.find({ _id: id }).exec();
  }

  async findAll(): Promise<Team[]> {
    return await this.teamModel.find().exec();
  }
}
