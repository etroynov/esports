import { Module } from '@nestjs/common';
import { TeamsController } from './teams.controller';
import { TeamsService } from './teams.service';
import { teamsProviders } from './teams.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TeamsController],
  providers: [TeamsService, ...teamsProviders],
})
export class TeamsModule {}
