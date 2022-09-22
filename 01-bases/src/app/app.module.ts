import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { contadorModule } from './contador/contador.module';
import { ContadorComponent } from './contador/contador/contador.component';
import { DbzModule } from './dbz/dbz.module';
//import {ContadorComponent} from './contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
    //ContadorComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    contadorModule,
    DbzModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
