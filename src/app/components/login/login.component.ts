import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  username: string | undefined;
  password: string | undefined;

  constructor() {}

  ngOnInit(): void {
    
  }
}
