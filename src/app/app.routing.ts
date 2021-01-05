import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: 'home', component: HomeComponent },
    {path: 'user/login', component: LoginComponent},
    {path: 'user/register', component: RegisterComponent},
    {path: '**',component: HomeComponent, pathMatch:'full'}
];

export const routing = RouterModule.forRoot(appRoutes);
