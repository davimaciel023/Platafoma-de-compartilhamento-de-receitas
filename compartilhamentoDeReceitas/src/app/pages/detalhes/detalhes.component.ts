import { ReceitaService } from './../../service/receita.service';
import { Component } from '@angular/core';
import { Receita } from '../../models/receita.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  imports: [],
  templateUrl: './detalhes.component.html',
  styleUrl: './detalhes.component.scss'
})
export class DetalhesComponent {
  receita!: Receita;

  constructor(
    private route: ActivatedRoute,
    private ReceitaService: ReceitaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if(id) {
      this.ReceitaService.pegarPorId(id).subscribe((dados) => {
        this.receita = dados
      })
    }
  }

  voltar() {
    this.router.navigate(['/listagem'])
  }
}
