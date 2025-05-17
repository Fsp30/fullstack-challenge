import { z } from 'zod'

const ProfessionalBaseSchema = z.object({
        name: z.string().min(1, "Nome é obrigatório"),
        telephone: z.string().min(11, "Telefone inválido"),
        email: z.string().email('E-mail inválido'),
        situation: z.boolean(),
        typeOfProfessionalId: z.number().int().positive('Id do tipo do profissional inválido')
})

export const CreateProfissionalSchema = ProfessionalBaseSchema
const UpdateProfessionalSchema = ProfessionalBaseSchema

const ProfessionalResponseSchema = ProfessionalBaseSchema.extend({
        id: z.number(),
        createdAt: z.string().datetime(),
        updatedAt: z.string().datetime(),
        typeProfessional: z.object({
                id: z.number(),
                describe: z.string(),
                situation: z.boolean(),
                createdAt: z.date(),
                updatedAt: z.date(),
        })
})

const ProfessionalListSchema = z.array(ProfessionalResponseSchema)

export type CreateProfessionalDto = z.infer<typeof CreateProfissionalSchema>
export type UpdateProfessionalDto = z.infer<typeof UpdateProfessionalSchema>
export type ProfessionalResponse = z.infer<typeof ProfessionalResponseSchema>
export type ProfessionalListResponse = z.infer<typeof ProfessionalListSchema>