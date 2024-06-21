import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';
import { authGuard } from './guards/login.guard';
import { AgendaComponent } from './components/agenda/agenda.component';
import { UsersComponent } from './components/users/users.component';
import { rolesGuard } from './guards/roles.guard';
import { functionalitiesOfSystem } from './guards/module-of-system';

const routes: Routes = [
  {
    path: functionalitiesOfSystem.login,
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutDefaultComponent,
    canActivate: [authGuard],
    children: [
      {
        path: functionalitiesOfSystem.home,
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: functionalitiesOfSystem.home,
        pathMatch: 'full',
      },
      {
        path: functionalitiesOfSystem.usuario.path,
        component: UsersComponent,
        canActivate: [rolesGuard],
        data: {
          idComponente: functionalitiesOfSystem.usuario.id
        }
      },
      {
        path: functionalitiesOfSystem.agenda.path,
        component: AgendaComponent,
        canActivate: [rolesGuard],
        data: {
          idComponente: functionalitiesOfSystem.agenda.id
        }
      }
    ]
  },
  {
    path: '**',
    redirectTo: functionalitiesOfSystem.login
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
