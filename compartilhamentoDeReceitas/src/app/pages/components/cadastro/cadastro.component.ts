import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReceitaService } from '../../../service/receita.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  form: FormGroup;
  imagemSelecionada: string = ''

  constructor(
    private fb: FormBuilder,
    private receitaService: ReceitaService,
    private router: Router
  ) {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      ingredientes: ['', Validators.required],
      modoPreparo: ['', Validators.required],
      tempoPreparo: ['', Validators.required],
      categoria: ['', [Validators.required, Validators.pattern(/^(\d{1,2}\s?(h|hora(s)?))?(\s?e\s?)?(\d{1,2}\s?(min|minuto(s)?))?$/i)]],
      imagem: ['']
    })
  }

  salvar() {
    const receita = {
      ...this.form.value,
      imagem: this.imagemSelecionada
    }

    this.receitaService.criar(receita).subscribe(() => {
      alert(`Receita salva com sucesso`)
      this.form.reset()
      this.imagemSelecionada = ''
    })

    this.router.navigate(['/listagem'])
  }

  arquivoSelecionado(event: Event): void {
    const fileInput = event.target as HTMLInputElement

    if(fileInput?.files?.length){
      const file = fileInput.files[0]

      const reader = new FileReader()
      reader.onload = () => {
        this.imagemSelecionada = reader.result as string
      };
      reader.readAsDataURL(file)
    }
  }

  cadastrar(){
    if(this.form.valid) {
      this.router.navigate(['/listagem'])
    } else {
      alert(`Os campos estão incorretos`)
    }
  }

  cancelar(){
    this.router.navigate(['/listagem'])
  }

  campoInvalido(campo: string): boolean {
  return this.form.get(campo)?.invalid && this.form.get(campo)?.touched || false;
}

}
