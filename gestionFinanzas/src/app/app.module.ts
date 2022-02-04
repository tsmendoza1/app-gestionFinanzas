import { MenuComponent } from './menu/menu.component';
import { IngresardatosComponent } from './ingresardatos/ingresardatos.component';
import { RegistroComponent } from './registro/registro.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogINComponent } from './log-in/log-in.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {UsuarioComponent} from "./usuario/usuario.component";

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LogINComponent,
    WelcomeComponent,
    RegistroComponent,
    UsuarioComponent,
    IngresardatosComponent,
    MenuComponent
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
