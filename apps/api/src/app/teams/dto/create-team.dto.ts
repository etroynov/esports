export class CreateTeamDto {
  readonly name: string;
  readonly image: number;
  readonly description: string;
  readonly players: ReadonlyArray<any>;
}
