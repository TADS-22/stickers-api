import { IPlayer } from "../../domain"
import { FindPlayerResultDto } from "../dto"

export const mapToResult = (entity: IPlayer): FindPlayerResultDto => {
    
    return {
        id: entity._id ?? '',
        name: entity.name,
        country: entity.country,
        height: entity.height,
        weight: entity.weight,
        jersey: entity.jersey,
        position: entity.position,
    }
}