import { BaseException } from "./BaseException"

export class ResourceNotFoundException extends BaseException{
        constructor(resource = 'Resource'){
                super(`${resource} não encontrado.`, 404 )
        }
}