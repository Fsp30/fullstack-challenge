import { z } from 'zod'

const TypeProfessionalBaseSchema = z.object({
        describe: z.string().min(1, "Descrição é obrigatória"),
        situation: z.boolean()
})

const CreateTypeProfessionalSchema = TypeProfessionalBaseSchema
const UpdateTypeProfessionalSchema = TypeProfessionalBaseSchema

const ResponseTypeProfessionalSchema = TypeProfessionalBaseSchema.extend({
        id: z.number(),
        describe: z.string(),
        situation: z.boolean(),
        createdAt: z.date(),
        updatedAt: z.date(),
})

const TypeProfessionalListSchema = z.array(ResponseTypeProfessionalSchema)

export type CreateTypeProfessionalDto = z.infer<typeof CreateTypeProfessionalSchema>
export type UpdateTypeProfessionalDto = z.infer<typeof UpdateTypeProfessionalSchema>
export type ResponseTypeProfessional = z.infer<typeof ResponseTypeProfessionalSchema>
export type ResponseTypeProfessionalList = z.infer<typeof TypeProfessionalListSchema>
 