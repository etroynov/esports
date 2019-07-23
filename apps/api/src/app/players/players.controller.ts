import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { PlayersService } from './players.service';
import { Player } from './interfaces/player.interface';

@Controller('players')
export class PlayersController {
  constructor(private readonly catsService: PlayersService) {}

  @Post()
  async create(@Body() createPlayerDto: CreatePlayerDto) {
    this.catsService.create(CreatePlayerDto);
  }

  @Get()
  async findAll(): Promise<Player[]> {
    return this.catsService.findAll();
  }
}
