import { Component } from '@angular/core';
import { Receita } from '../../models/receita.model';
import { ReceitaService } from '../../service/receita.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  imports: [CommonModule],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss'
})
export class ListagemComponent {

  receitas: Receita[] = []

  constructor(
    private receitaService: ReceitaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.receitaService.pegarTudo().subscribe((dados) => {
      this.receitas = dados
    })
  }

  verDetalhe(id: string) {
    this.router.navigate(['/detalhe', id])
  }

  editar(id: string) {
    this.router.navigate(['/detalhe', id])
  }

  deletar(id: string){
    if(confirm("Tem certeza que deseja excluir essa receita?")){
      this.receitaService.deletar(id).subscribe(() => {
        this.receitas = this.receitas.filter(r => r.id !== id)
      })
    }
  }
}
