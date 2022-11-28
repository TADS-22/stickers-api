import { playerRepository } from "../data/repository";
import { FindPlayerResultDto } from "../dto";
import { findPlayerResultMapper } from "../mapper";

export const execute = async (): Promise<FindPlayerResultDto[]> => {
    const result = await playerRepository.findAll()
    return result.map(r => findPlayerResultMapper.mapToResult(r))
}