import { IPlayer } from "./player-entity";

export interface IStiker {
    _id?: string,
    player: IPlayer,
    legend: boolean,
}