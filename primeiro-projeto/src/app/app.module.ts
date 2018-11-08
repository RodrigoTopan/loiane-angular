/* Prepara a aplicação para ser executada
em um browser */
import { BrowserModule } from '@angular/platform-browser'; 
import { NgModule } from '@angular/core'; // decorator
import { AppRoutingModule } from './app-routing.module';
/*
Utilizada para trabalhar com formulário, por exemplo com as diretivas ngModel para 
fazer o 2-way-data-binding
*/
// import { FormsModule } from '@angular/forms';
// Utilizada para trabalhar com requisições AJAX
// import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursoModule } from './curso/curso.module';

/*
Nós devemos utilizar o decorator NgModule para determinar 
que uma classe se comportará como um módulo
*/
@NgModule({
  /*
    Declarations: listamos todas as componentes, diretivas e
    pipes que utilizaremos nesse módulo
  */
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    MeuPrimeiro2Component,

  ],
  /*
    Importar módulos que serão utilizados por algum dos componentes
  */
  imports: [
    BrowserModule,
    CursoModule,
    AppRoutingModule
  ],
  /*
    Onde colocamos os serviços para todos os componentes declarados no módulo
  */
  providers: [],
  /*
    Inicialização do componente principal da nossa SPA. Viewport
   */
  bootstrap: [AppComponent]
})
export class AppModule { }
