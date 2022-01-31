import { RegistroComponent } from './registro/registro.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogINComponent } from './log-in/log-in.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',component:WelcomeComponent},
  {path: 'inicio',component:InicioComponent},
  {path: 'login',component:LogINComponent},
  {path: 'welcome',component:WelcomeComponent},
  {path: 'registro',component:RegistroComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
