import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../guards/auth-service';
import { LoginService } from '../../services/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private readonly loginService: LoginService,
    private readonly authService: AuthService,
    private messageService: MessageService,
  ) {}

  login() {
    this.loginService.login(this.email, this.password).subscribe({
      next: (user) => {
        console.log(user.data);
          this.authService.login(user.data);

          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Login successful',
          });
      },
      error: (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: error.message,
        });
      },
    });
  }
}
