import { Routes } from '@angular/router';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { CadastroComponent } from './pages/components/cadastro/cadastro.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { EditarComponent } from './pages/editar/editar.component';

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'listagem',
      pathMatch: 'full'
    },
    {
      path: 'listagem',
      component: ListagemComponent
    },
    {
      path: 'cadastroReceita',
      component: CadastroComponent
    },
    {
      path: 'detalhe/:id',
      component: DetalhesComponent
    },
    {
      path: 'editar/:id',
      component: EditarComponent
    }
];
