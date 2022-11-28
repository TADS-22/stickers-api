import { playerRepository } from "../data/repository";
import { FindPlayerResultDto } from "../dto";
import { findPlayerResultMapper } from "../mapper";

export const execute = async (country: string): Promise<FindPlayerResultDto[]> => {
    const result = await playerRepository.findByCountry(country)
    return result.map(r => findPlayerResultMapper.mapToResult(r))
}