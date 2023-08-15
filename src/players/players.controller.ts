import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PlayersService } from './service/players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { PlayerValidationPipe } from '../commons/pipes/player-validation.pipe';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  async create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playersService.create(createPlayerDto);
  }

  @Get()
  async findAll() {
    return this.playersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', PlayerValidationPipe) id: string) {
    return this.playersService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', PlayerValidationPipe) id: string,
    @Body() updatePlayerDto: UpdatePlayerDto,
  ) {
    return this.playersService.update(id, updatePlayerDto);
  }

  @Delete(':id')
  async remove(@Param('id', PlayerValidationPipe) id: string) {
    return this.playersService.remove(id);
  }
}
