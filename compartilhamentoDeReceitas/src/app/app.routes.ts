import { Routes } from '@angular/router';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { CadastroComponent } from './pages/components/cadastro/cadastro.component';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'cadastroReceita',
      pathMatch: 'full'
    },
    {
      path: 'listagem',
      component: ListagemComponent
    },
    {
      path: 'cadastroReceita',
      component: CadastroComponent
    }
];
