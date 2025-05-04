import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ProfessionalService } from './professional.service';
import { CreateProfessionalDto } from './dto/create-professional.dto';
import { UpdateProfessionalDto } from './dto/update-professional.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger'

@ApiTags('Professiona')
@Controller('professional')
export class ProfessionalController {
  constructor(private readonly professionalService: ProfessionalService) { }

  @Post()
  @ApiOperation({ summary: 'Cria um novo profissional' })
  @ApiResponse({ status: 201, description: 'Profissional criado com sucesso.' })
  create(@Body() createProfessionalDto: CreateProfessionalDto) {
    return this.professionalService.create(createProfessionalDto);
  }

  @Get()
  @ApiOperation({ summary: 'Lista profissionais por tipo com paginação de 10 itens' })
  @ApiResponse({ status: 200, description: 'Lista retornada com sucesso.' })
  findAll(
    @Query('page')
    page: string = '1',

    @Query('limit')
    limit: string = '10') {

    const pageNumber = parseInt(page, 10)
    const limitNumber = parseInt(limit, 10)
    return this.professionalService.findAll(pageNumber, limitNumber);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retorna um profissional por id' })
  @ApiResponse({ status: 200, description: 'Profissional retornado com sucesso.' })
  findOne(@Param('id') id: string) {
    return this.professionalService.findOne(+id);
  }

  @Get('filter/by-type')
  @ApiOperation({ summary: 'Retorna uma lista de profissionais por id de Tipo de Profissional' })
  @ApiResponse({ status: 200, description: 'Lista de profissionais retornada com sucesso.' })
  findByType(
    @Query('typeId')
    typeId: string,

    @Query('page')
    page: string = '1',

    @Query('limit')
    limit: string = '10'
  ) {
    const pageNumber = parseInt(page, 10)
    const limitNumber = parseInt(limit, 10)

    return this.professionalService.findByType(Number(typeId), pageNumber, limitNumber)
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualiza um profissional por id' })
  @ApiResponse({ status: 201, description: 'Profissional atualizado com sucesso.' })
  update(@Param('id') id: string, @Body() updateProfessionalDto: UpdateProfessionalDto) {
    return this.professionalService.update(+id, updateProfessionalDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove um profissional por id' })
  @ApiResponse({ status: 200, description: 'Profissional deletado com sucesso.' })
  remove(@Param('id') id: string) {
    return this.professionalService.remove(+id);
  }
}
