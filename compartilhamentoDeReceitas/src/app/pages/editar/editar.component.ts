import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitaService } from '../../service/receita.service';

@Component({
  selector: 'app-editar',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.scss'
})
export class EditarComponent {
  form!: FormGroup
  id!: string
  selecionarImagem = ''

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private receitaService: ReceitaService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!
    this.form = this.fb.group({
      nome: ['', Validators.required],
      ingredientes: ['', Validators.required],
      modoPreparo: ['', Validators.required],
      tempo: ['', Validators.required],
      categoria: ['', Validators.required]
    })

    this.receitaService.pegarPorId(this.id).subscribe(receita => {
      this.form.patchValue(receita)
      this.selecionarImagem = receita.imagem
    })
  }

  arquivoSelecionar(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.selecionarImagem = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  salvar() {
    const receitaAtualizada = {
      ...this.form.value,
      imagem: this.selecionarImagem
    }

    this.receitaService.atualizar(this.id, receitaAtualizada).subscribe(() => {
      alert(`Receita atualizada com sucesso!`)
      this.router.navigate(['/listagem'])
    })
  }
}
