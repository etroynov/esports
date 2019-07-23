import { Document } from 'mongoose';

export interface Player extends Document {
  readonly name: string;
  readonly age: number;
  readonly breed: string;
}
