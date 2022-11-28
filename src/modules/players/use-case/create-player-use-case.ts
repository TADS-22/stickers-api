import { playerRepository } from "../data/repository";
import { CreatePlayerDto } from "../dto";
import { createPlayerMapper } from "../mapper";

export const execute = async (data: CreatePlayerDto): Promise<void> => {
    const player = createPlayerMapper.mapToEntity(data)
    await playerRepository.save(player)
}
