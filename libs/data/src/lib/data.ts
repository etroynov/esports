/**
 * Player
 */

export interface IPlayer {
  firtsname: string;
  lastname: string;
  nickname: string;
  image: string;
  birthDate: string;
  tournaments: ReadonlyArray<ITournament>;
}

/**
 * Tournament
 */

export interface ITournament {
  name: string;
  description: string;
  image: string;
  prizePool: number;
  series: ReadonlyArray<ITournamentSeries>;
  organizer: ReadonlyArray<IOrganizer>;
  sponsors: ReadonlyArray<ITournamentSponsor>;
  gameVersion: number;
  type: ITournamentType;
  location: ReadonlyArray<string>;
  venue: ReadonlyArray<string>;
  startDate: string;
  endDate: string;
  teams: ReadonlyArray<ITeam>;
  format: ReadonlyArray<ITournamentFormat>;
  dpcPoints: number;

}

export interface ITournamentSponsor {
  name: string;
  description: string;
  image: string;
}
export interface ITournamentFormat {
  name: string;
  description: string;
  image: string;
}

export interface ITournamentSeries {
  name: string;
  description: string;
  image: string;
}

export interface ITournamentType {
  name: string;
}

/**
 * Organization
 */

export interface IOrganizer {
  name: string;
  description: string;
  image: string;
}

/**
 * Team
 */

export interface ITeam {
  name: string;
  image: number;
  description: string;
  players: ReadonlyArray<any>;
}
