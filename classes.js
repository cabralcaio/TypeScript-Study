"use strict";
class Cachorro {
    //atributos ou propriedades
    // nome: string
    // raca: string
    // cor: string
    // idade: number
    // peso: number
    // método construtor
    //Serve para ao criar um novo objeto da classe, possamos receber valores para que a classe utilize-os
    // se o programador nao criar o metodo constructor, a propria linguagem gera uma padrao
    //no JS/TS se pode ter apenas 1 unico metodo constructor
    constructor(nome, raca, cor, idade, peso) {
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.idade = idade;
        this.peso = peso;
        // this.nome = nome
        // this.raca = raca
        // this.cor = cor
        // this.idade = idade
        // this.peso = peso
    }
}
//Objeto é uma instancia de uma classe
let c = new Cachorro("sheik", "Pitbull", "preto", 12, 2);
console.log(c.nome);
