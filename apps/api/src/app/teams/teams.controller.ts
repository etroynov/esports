import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { TeamsService } from './teams.service';
import { Team } from './interfaces/team.interface';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Post()
  async create(@Body() createTeamDto: CreateTeamDto) {
    if (Object.keys(createTeamDto).length) {
      this.teamsService.create(createTeamDto);
    }
  }

  @Get()
  async find(id: string): Promise<Team[]> {
    return this.teamsService.find(id);
  }

  @Get()
  async findAll(): Promise<Team[]> {
    return this.teamsService.findAll();
  }
}
