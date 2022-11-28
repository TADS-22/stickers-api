import { IPlayer } from "../../domain"
import { CreatePlayerDto } from "../dto"

export const mapToEntity = (dto: CreatePlayerDto): IPlayer => {
    return {
        name: dto.name,
        country: dto.country,
        height: dto.height,
        weight: dto.weight,
        jersey: dto.jersey,
        position: dto.position
    }
}