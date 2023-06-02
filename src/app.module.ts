import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ImcModule } from './imc/imc.module';

@Module({
  imports: [ImcModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule { }
