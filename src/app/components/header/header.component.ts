import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../guards/auth-service';


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
      home: { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/home'] },
      agenda: { id: 2, label: 'Agenda', icon: 'pi pi-fw pi-video', routerLink: ['/agenda'] },
      users: { id: 1, label: 'Cadastro de Usuários', icon: 'pi pi-fw pi-file', routerLink: ['/users'] }
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