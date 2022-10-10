"use strict";
class Cachorro {
    // nome: string
    // raca: string 
    // cor: string 
    // idade: number
    // peso: number
    // altura: number
    // morde: boolean
    // vacinado: boolean
    // pedigree: boolean
    /*
    metodo construtor
    serve para ao  criar um novo objeto da classe, possamos receber valores para que a classe utilize-os
    */
    constructor(nome, raca, cor, idade, peso, altura, morde, vacinado, pedigree) {
        // this.nome = nome
        // this.raca = raca
        // this.cor = cor
        // this.idade = idade
        // this.peso = peso
        // this.altura = altura
        // this.morde = morde
        // this.vacinado = vacinado
        // this.pedigree = pedigree
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.morde = morde;
        this.vacinado = vacinado;
        this.pedigree = pedigree;
    }
    somar(a, b) {
        return a + b;
    }
}
/** objeto é uma instacia da classe */
let c = new Cachorro('Mc Poze', 'gato', 'frajola', 1, 3, 0.4, true, true, false);
let c2 = new Cachorro('justin Bieber', 'vira lata', 'caramelo', 1, 3, 2, true, true, false);
console.log(c);
console.log(c2);
