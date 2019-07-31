/**
 * Vendor
 */

import * as mongoose from 'mongoose';

/**
 * Expo
 */

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(
        'mongodb://localhost/esports', {
          useNewUrlParser: true,
          useCreateIndex: true,
          debug: true,
        }
      ),
  },
];
