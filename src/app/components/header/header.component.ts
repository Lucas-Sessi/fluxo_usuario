import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  ngOnInit() {
      this.items = [
          { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home']},
          { label: 'Agenda', icon: 'pi pi-fw pi-video', routerLink: ['/agenda']},
          { label: 'Cadastro de Usuários', icon: 'pi pi-fw pi-file', routerLink: ['/user/register'] },
      ];

      this.activeItem = this.items[0];
  }
}