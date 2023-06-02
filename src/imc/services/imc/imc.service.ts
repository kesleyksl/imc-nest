import { Injectable } from '@nestjs/common';
import { Pessoa } from 'src/shared/models/pessoa.interface';

@Injectable()
export class ImcService {
    calculateImc(pessoa: Pessoa): Pessoa {
        pessoa.imc = this.calculate(pessoa);
        pessoa.descricao = this.classification(pessoa);
        return pessoa;
    }
    private calculate(pessoa: Pessoa): number {
        return pessoa.peso / pessoa.altura ** 2;

    }

    private classification(pessoa: Pessoa): string {

        switch (true) {
            case pessoa.imc <= 18.5:
                return "Magreza";
            case pessoa.imc < 24.9:
                return "Normal";
            case pessoa.imc < 30:
                return "Sobrepeso";
            default:
                return "Obesidade";
        }
    }
}