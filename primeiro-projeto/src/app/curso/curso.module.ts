import { NgModule } from '@angular/core';
/* 
  Diferença entre o módulo raiz e um módulo de funcionalidade
  Quase igual ao browserModule
*/
import { CommonModule } from '@angular/common';
import { CursoComponent } from './curso.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';

@NgModule({
  declarations: [CursoComponent, CursoDetalheComponent],
  imports: [
    CommonModule
  ],
  //Diz pro angular quais as declarações, diretivas, 
  //components que queremos expor para os outros módulos
  exports: [
    CursoComponent
  ]
})
export class CursoModule { }
