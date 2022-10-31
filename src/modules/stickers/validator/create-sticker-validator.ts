import * as Yup from 'yup'

export const createStickerValidator = Yup.object({
    player: Yup.string().required('Player id é obrigatório'),
    legend: Yup.boolean().required('Legend é obrigatório')
})
