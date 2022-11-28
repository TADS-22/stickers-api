import * as Yup from 'yup'
import { Countries } from '../../domain/countries'
import { Positions } from '../../domain/positions'

export const createPlayerValidator = Yup.object({
    name: Yup.string().required('Nome do jogador é obrigatório'),
    country: Yup.string()
        .oneOf(Object.values(Countries), 'País inválido')
        .required('País do jogador é obrigatório'),
    position: Yup.string()
        .oneOf(Object.values(Positions), 'Posição inválida')
        .required('Posição do jogador é obrigatória'),
    weight: Yup.number()
        .required('Peso do jogador é obrigatório'),
    height: Yup.number()
        .required('Altura do jogador é obrigatória'),
    jersey: Yup.number()
        .required('Camisa do jogador é obrigatória')
        .integer('Camisa deve ser numérico inteiro'),
})
