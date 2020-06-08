import { NacionalidadeEnum } from './enum-nacionalidade';
import { SexoEnum } from './sexo-enum';

export class Usuario {

  id: number;
  nomeCompleto: string;
  idade: number;
  dataNascimento: string;
  cpf: string;
  sexo: SexoEnum;
  nacionalidade: NacionalidadeEnum;

}

