// let pessoa = {
//     nome: "Pietro",
//     idade: 22,
//     altura: 1.8,
//     cpf: "111.099.999-25",
//     solteiro: false,
//     habilidades: ["Java", "Angular", "TypeScript", "JavaScript", "Node.js", "SpringBoot"],
//     endereco: {
//         rua: "Rua dos bobos",
//         numero: 0,
//         estado: "CE",
//         complemento: "Sem complemento",
//         cep: "04560-800"
//     }
// }

// let pessoa2 = {
//     nome: "Feliciano",
//     idade: 124,
//     altura: 1.1,
//     cpf: "111.099.999-25",
//     solteiro: false,
//     habilidades: ["Java", "Angular", "TypeScript", "JavaScript", "Node.js", "SpringBoot"],
//     endereco: {
//         rua: "Rua dos bobos",
//         numero: 0,
//         estado: "CE",
//         complemento: "Sem complemento",
//         cep: "04560-800"
//     },
//     rg: "50508405105"
// }

interface Endereco {
    rua: string
    numero: number
    estado: string
    complemento: string
    cep: string
}

interface Pessoa {
    nome: string
    idade: number
    altura: number
    cpf: string
    solteiro: boolean
    habilidades: string[]
    endereco: Endereco
    cumprimentar(): void
}

const p: Pessoa = {
    altura: 1.9,
    nome: "Faustao",
    idade: 12,
    cpf: "01100050225",
    solteiro: true,
    habilidades: ["HTML"],
    endereco: {
        rua: "Rua Bacana",
        cep: "12325647",
        complemento: "Ap",
        estado: "PE",
        numero: 121
    },
    cumprimentar() {
        console.log("Saudações, meu nome é " + this.nome)
    }
}

const p2: Pessoa = {
    altura: 1.6,
    nome: "Paula",
    idade: 23,
    cpf: "01100050225",
    solteiro: false,
    habilidades: ["HTML"],
    endereco: {
        rua: "Rua Bacana",
        cep: "12325647",
        complemento: "Ap",
        estado: "PE",
        numero: 121
    },
    cumprimentar() {
        console.log("Salve quebrada, meu vulgo é " + this.nome)
    }
}