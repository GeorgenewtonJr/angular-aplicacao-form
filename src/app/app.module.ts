import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../material.module';
import {RadioOverviewExample} from './radio-overview-example';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { ListaAplicacaoComponent } from './lista-aplicacao/lista-aplicacao.component';
import { NovaAplicacaoComponent } from './nova-aplicacao/nova-aplicacao.component';

@NgModule({
  declarations: [RadioOverviewExample, ListaAplicacaoComponent, NovaAplicacaoComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [RadioOverviewExample],
})
export class AppModule {}
