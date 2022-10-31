import { model, Schema } from "mongoose";
import { ISticker } from "../../../domain";

const stickerSchema = new Schema<ISticker>({
    player: { type: Schema.Types.ObjectId, ref: 'player' },
    legend: { type: Boolean },
})

export const Sticker = model<ISticker>('sticker', stickerSchema)
