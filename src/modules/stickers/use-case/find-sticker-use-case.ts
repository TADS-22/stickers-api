import { FindStickerResultDto } from "../dto";
import { stickerRepository } from '../data/repository'
import { findStickerMapper } from "../mapper";

export const execute = async (id: string): Promise<FindStickerResultDto | null> => {
    const result = await stickerRepository.findById(id)
    if (result) {
        return findStickerMapper.mapToResult(result)
    }

    return null
}
