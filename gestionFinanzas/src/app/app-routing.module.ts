import { MenuComponent } from './menu/menu.component';
import { RegistroComponent } from './registro/registro.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogINComponent } from './log-in/log-in.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {UsuarioComponent} from './usuario/usuario.component';

const routes: Routes = [
  {path: '',component:WelcomeComponent},
  {path: 'inicio',component:InicioComponent},
  {path: 'login',component:LogINComponent},
  {path: 'welcome',component:WelcomeComponent},
  {path: 'registro',component:RegistroComponent},
  {path: 'usuario',component:UsuarioComponent},
  {path: 'menu',component:MenuComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
