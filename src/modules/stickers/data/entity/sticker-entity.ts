import { model, Schema } from "mongoose";

export interface IStiker {
    _id?: string,
    player: string,
    legend: boolean,
}

const stickerSchema = new Schema<IStiker>({
    player: { type: String },
    legend: { type: Boolean },
})

export const Contact = model<IStiker>('sticker', stickerSchema)
