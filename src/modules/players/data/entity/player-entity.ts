import { model, Schema } from "mongoose";
import { IPlayer } from "../../../domain";
import { Countries } from "../../../domain/countries";
import { Positions } from "../../../domain/positions";

const playerSchema = new Schema<IPlayer>({
    name: { type: String },
    country: { type: String, enum: Countries },
    position: { type: String, enum: Positions },
    height: { type: Number },
    weight: { type: Number },
    jersey: { type: Number },
})

export const Player = model<IPlayer>('player', playerSchema)
