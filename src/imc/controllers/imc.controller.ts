import { Body, Controller, Post } from '@nestjs/common';
import { Pessoa } from 'src/shared/models/pessoa.interface';
import { ImcService } from '../services/imc/imc.service';

@Controller('imc')
export class ImcController {
    constructor(private imcService: ImcService) { }
    @Post('/calculate')
    calculateImc(@Body() pessoa: Pessoa) {
        return this.imcService.calculateImc(pessoa);
    }
}
