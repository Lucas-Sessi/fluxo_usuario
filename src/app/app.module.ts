import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { HeaderComponent } from './components/header/header.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { HomeComponent } from './components/home/home.component';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AgendaComponent } from './components/agenda/agenda.component';
import { UsersComponent } from './components/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    LayoutDefaultComponent,
    AgendaComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    AppRoutingModule,
    TabMenuModule,
    ToastModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
