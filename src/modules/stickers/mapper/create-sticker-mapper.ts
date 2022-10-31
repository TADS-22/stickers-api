import { ISticker } from "../../domain";
import { CreateStickerDto } from "../dto";

export const mapToEntity = (dto: CreateStickerDto): ISticker => {
    return {
        player: dto.player,
        legend: dto.legend,
    }
}
