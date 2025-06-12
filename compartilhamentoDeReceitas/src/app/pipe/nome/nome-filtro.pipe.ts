import { Pipe, PipeTransform } from '@angular/core';
import { Receita } from '../../models/receita.model';
@Pipe({
  name: 'nomeFilter',
  standalone: true
})
export class NomeFilterPipe implements PipeTransform {
  transform(receitas: Receita[], termo: string): Receita[] {
    if (!termo) return receitas;
    return receitas.filter(r => r.nome.toLowerCase().includes(termo.toLowerCase()));
  }
}
