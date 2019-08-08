import { Connection } from 'mongoose';
import { TeamSchema } from './schemas/team.schema';

export const teamsProviders = [
  {
    provide: 'TEAM_MODEL',
    useFactory: (connection: Connection) => connection.model(
      'Team', TeamSchema
    ),
    inject: ['DATABASE_CONNECTION'],
  },
];
