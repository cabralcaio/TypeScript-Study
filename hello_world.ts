// tipagem no TypeScript

// tipagem implícita

let username = 'shaolin_matador_de_porco';
// username = 6;   acusa erro no typescript porque o tipo implicito da variavel é string
username = 'flavioDoPneu';

// tipagem explícita
let pi: number = Math.PI;
// pi = 'suco Tang'; acusa erro no typescript porque o tipo da variável é number e atribui uma string
let logado: boolean = true;

// union types
let rg: number | string= 12345678900;
rg = '3983847638';

// qualquer tipo: any
let generico: any = [];
generico = {
    a: '',
    b: 8,
    c: true
};
generico = 'eu sou genérico';
generico = 6.89;

// maneira 1 de se declarar
const listaDeNomes: string[] = ['Jose', 'Carlos', 'Eduardo', 'Maria'];
listaDeNomes.push('Camila');
const notas: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// notas.push('e ai cara'); acusa ERRO

// maneira 2 de se declarar
const valores: Array<string | number> = ['pudim', 96, 'batata', 999];
const array: Array<boolean> = [true, false, false, false, true, true, false];
const lista: Array<any> = [1, true, {}, [], 'sadasda'];
let listaPodeTudo: Array<any> = [true,'alo',2.3,8,"b"];
console.log(listaPodeTudo);