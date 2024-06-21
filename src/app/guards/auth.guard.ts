import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth-service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const [acesso, idComponente] = [
    route.data['acesso'],
    route.data['idComponente']
  ];

  const userAuth = JSON.parse(localStorage.getItem('acessoUsuario') ?? '{}'); 
  
  const access = userAuth.find((item: any) => {
    return item.id === idComponente;
  });

  
  if (access) {
    console.log('acesso', acesso);
    return true;
  }
  
  if (authService.isLoggedIn) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
