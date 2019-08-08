import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreatePlayerDto } from './dto/create-player.dto';
import { PlayersService } from './players.service';
import { Player } from './interfaces/player.interface';

@Controller('players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  async create(@Body() createPlayerDto: CreatePlayerDto) {
<<<<<<< HEAD
    try {
      if (Object.keys(createPlayerDto).length) {
        this.playersService.create(createPlayerDto);
      }
    } catch(e) {
      return e;
=======
    console.info(createPlayerDto);
    if (Object.keys(createPlayerDto).length) {
      this.playersService.create(createPlayerDto);
>>>>>>> 11b4f9abf3efd3a1562e549b5d8654dd45b236a8
    }
  }

  @Get()
  async find(id: string): Promise<Player[]> {
    return this.playersService.find(id);
  }

  @Get()
  async findAll(): Promise<Player[]> {
    return this.playersService.findAll();
  }
}
