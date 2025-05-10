import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TypeProfessionalService } from './type-professional.service';
import { CreateTypeProfessionalDto } from './dto/create-type-professional.dto';
import { UpdateTypeProfessionalDto } from './dto/update-type-professional.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'

@ApiTags('TypeProfessional')
@Controller('type-professional')
export class TypeProfessionalController {
  constructor(private readonly typeProfessionalService: TypeProfessionalService) { }

  @Post()
  @ApiOperation({ summary: 'Cria um novo tipo de profissional' })
  @ApiResponse({ status: 201, description: 'Tipo de Profissional criado com sucesso.' })
  create(@Body() createTypeProfessionalDto: CreateTypeProfessionalDto) {
    return this.typeProfessionalService.create(createTypeProfessionalDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retorna todos os Tipos de Profissionais com paginação de 10 itens' })
  @ApiResponse({ status: 200, description: 'Tipos de Profissionais retornado com sucesso.' })
  findAll(
    @Query('page')
    page: string = '1',

    @Query('limit') 
    limit: string = '10'
  ) {
    const pageNumber = parseInt(page, 10)
    const limitNumer = parseInt(limit, 10)
    return this.typeProfessionalService.findAll(pageNumber, limitNumer);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um Tipo de Profissional por id' })
  @ApiResponse({ status: 200, description: 'Profissional retornado com sucesso.' })
  findOne(@Param('id') id: number) {
    return this.typeProfessionalService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um tipo de Profissional usando o id' })
  @ApiResponse({ status: 202, description: 'Tipo de Profissional atualizado com sucesso.' })
  update(@Param('id') id: number, @Body() updateTypeProfessionalDto: UpdateTypeProfessionalDto) {
    return this.typeProfessionalService.update(+id, updateTypeProfessionalDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deleta um Tipo de Profissional' })
  @ApiResponse({ status: 201, description: 'Tipo de Profissional deletado com sucesso.' })
  remove(@Param('id') id: number) {
    return this.typeProfessionalService.remove(+id);
  }
}
