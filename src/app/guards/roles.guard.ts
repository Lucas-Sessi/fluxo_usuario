import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth-service';

export const rolesGuard: CanActivateFn = (route, state) => {
  const [acesso, idComponente] = [
    route.data['acesso'],
    route.data['idComponente']
  ];

  const userAuth = JSON.parse(localStorage.getItem('acessoUsuario') ?? '{}'); 
  
  const access = userAuth.find((item: any) => {
    return item.id === idComponente;
  });

  
  if (access) {
    return true;
  }

  return false;
};
