import { playerRepository } from "../data/repository";
import { FindPlayerResultDto } from "../dto";
import { findPlayerResultMapper } from "../mapper";

export const execute = async (id: string): Promise<FindPlayerResultDto | null> => {
    const result = await playerRepository.findById(id)
    if (result) {
        return findPlayerResultMapper.mapToResult(result)
    }

    return null
}