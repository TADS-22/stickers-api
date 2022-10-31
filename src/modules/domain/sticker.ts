import { IPlayer } from "./player";

export interface ISticker {
    _id?: string,
    player: IPlayer | string,
    legend: boolean,
}