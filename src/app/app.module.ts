import { NgModule } from '@angular/core'; //decorator importado
import { BrowserModule } from '@angular/platform-browser'; //prepara a aplicação para ser executada no browser

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({ //decorar a classe, que representa um módulo
  declarations: [ //lista de todos os componentes, diretivas e pipes que utilizaremos nesse módulo
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component
  ],
  imports: [ //lista outros módulos que vamos utilizar ou que está presente dentro de algum componente
    BrowserModule,
    AppRoutingModule,
    CursosModule
  ],
  providers: [], //onde fica os serviços disponíveis para os componentes declarados nesse módulo
  bootstrap: [AppComponent]
})
export class AppModule { } //declaração da classe
