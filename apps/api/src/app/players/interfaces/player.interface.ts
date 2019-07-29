import { Document } from 'mongoose';
import { IPlayer } from '@esports/data';

export interface Player extends Document, IPlayer {}
