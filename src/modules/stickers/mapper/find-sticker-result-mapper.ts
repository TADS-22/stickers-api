import { IPlayer, ISticker } from "../../domain";
import { FindStickerResultDto } from "../dto";

export const mapToResult = (entity: ISticker): FindStickerResultDto => {
    const player = entity.player as IPlayer
    
    return {
        id: entity._id ?? '',
        player: player.name,
        country: player.country,
        height: player.height,
        weight: player.weight,
        jersey: player.jersey,
        position: player.position,
        legend: entity.legend,
    }
}