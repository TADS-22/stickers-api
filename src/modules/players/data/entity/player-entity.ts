import { model, Schema } from "mongoose";

export interface IPlayer {
    _id?: string,
    name: string,
    country: string,
    position: string,
    height: number,
    weight: number,
    jersey: number,
}

const playerSchema = new Schema<IPlayer>({
    name: { type: String },
    country: { type: String },
    position: { type: String },
    height: { type: Number},
    weight: { type: Number},
    jersey: { type: Number},
})

export const Contact = model<IPlayer>('player', playerSchema)
