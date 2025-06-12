import { Pipe, PipeTransform } from '@angular/core';
import { Receita } from '../models/receita.model';

@Pipe({
  name: 'categoriaFiltro'
})
export class CategoriaFiltroPipe implements PipeTransform {

  transform(receitas: Receita[], categoria: string): Receita[] {
    if(!categoria) return receitas
    return receitas.filter(r => r.categoria.toLowerCase() === categoria.toLowerCase())
  }

}
