import { Component } from "@angular/core";
import { template } from "@angular/core/src/render3";

/*

Nós precisamos falar para o angular que essa classe é um componente do angular
para isso utilizamos o decorator
Maneira de passar informações adicionais para o transpiler
*/

@Component({
    // Metadados passados ao componente
    selector: 'meu-primeiro-component', //Permite trabalhar com webcomponentes
    template: `
        <p> Meu primeiro component com angular 2!</p>
    `
})
export class MeuPrimeiroComponent {}
