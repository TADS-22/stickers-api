import { model, Schema } from "mongoose";
import { IStiker } from "../../../domain";

const stickerSchema = new Schema<IStiker>({
    player: { type: Schema.Types.ObjectId, ref: 'player' },
    legend: { type: Boolean },
})

export const Sticker = model<IStiker>('sticker', stickerSchema)
