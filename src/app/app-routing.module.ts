import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';
import { authGuard } from './guards/auth.guard';
import { AgendaComponent } from './components/agenda/agenda.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutDefaultComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'agenda',
        component: AgendaComponent,
        canActivate: [authGuard],
        data: {
          idComponente: 2,
          acesso: 'admin'
        }
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [authGuard],
        data: {
          idComponente: 3,
          acesso: 'admin'
        }
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
