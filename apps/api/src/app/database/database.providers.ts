/**
 * Vendor
 */

import * as mongoose from 'mongoose';

/**
 * Mongoose settings
 */

mongoose.set({ debug: true });

/**
 * Expo
 */

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(
        'mongodb://esports:pass@localhost/esports', {
          useNewUrlParser: true,
          auth: {
            authdb:"admin"
          }
        }
      ),
  },
];
