import { Document } from 'mongoose';
import { ITeam } from '@esports/data';

export interface Team extends Document, ITeam {}
