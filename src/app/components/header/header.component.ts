import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { functionalitiesOfSystem } from '../../guards/module-of-system';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  ngOnInit() {
    const userAuth = JSON.parse(localStorage.getItem('acessoUsuario') ?? '[]');

    const allFunctionalities = {
      home: {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: [functionalitiesOfSystem.home]
      },
      users: {
        id: functionalitiesOfSystem.usuario.id,
        label: 'Cadastro de Usuários',
        icon: 'pi pi-fw pi-file',
        routerLink: [functionalitiesOfSystem.usuario.path]
      },
      agenda: {
        id: functionalitiesOfSystem.agenda.id,
        label: 'Agenda',
        icon: 'pi pi-fw pi-video',
        routerLink: [functionalitiesOfSystem.agenda.path]
      }
    };

    this.items = [
      allFunctionalities.home,
      ...userAuth.map((auth: any) => {
        return Object.values(allFunctionalities).find((func: any) => func.id === auth.id);
      }).filter((item: any) => item !== undefined)
    ];

      this.activeItem = this.items[0];
  }
}