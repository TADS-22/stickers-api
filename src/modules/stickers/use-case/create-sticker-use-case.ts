import { CreateStickerDto } from "../dto";
import { createStickerMapper } from "../mapper";
import { stickerRepository } from "../data/repository";

export const execute = async (data: CreateStickerDto) => {
    const sticker = createStickerMapper.mapToEntity(data)
    await stickerRepository.save(sticker)
}
