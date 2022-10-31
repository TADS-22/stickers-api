import { model, Schema } from "mongoose";
import { IPlayer } from "../../../domain";

const playerSchema = new Schema<IPlayer>({
    name: { type: String },
    country: { type: String },
    position: { type: String },
    height: { type: Number},
    weight: { type: Number},
    jersey: { type: Number},
})

export const Player = model<IPlayer>('player', playerSchema)
