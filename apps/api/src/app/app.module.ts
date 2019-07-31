/*!
 * Vendor
 */

import { Module } from '@nestjs/common';

/*!
 * Modules
 */

import { PlayersModule } from './players/players.module';
import { TeamsModule } from './teams/teams.module';

/*!
 * Expo
 */

@Module({
  imports: [PlayersModule, TeamsModule],
})
export class AppModule {}
