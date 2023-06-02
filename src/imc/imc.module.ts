import { Module } from '@nestjs/common';
import { ImcController } from './controllers/imc.controller';
import { ImcService } from './services/imc/imc.service';

@Module({
  controllers: [ImcController],
  exports: [],
  providers: [ImcService],
})
export class ImcModule { }
