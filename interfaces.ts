// let pessoa = {
//     nome: 'Pietro',
//     idade: 22,
//     altura: 1.8,
//     cpf: '111.111.111-11',
//     solteiro: false,
//     habilidades: ['java','Angular','Typescript','Javascript','Node.js','Spring boot'],
//     endereço: {
//         rua: 'Rua feliz',
//         numero: 567,
//         estado: 'CE',
//         complemento: 'Sem complemento',
//         cep: '57010-161',
//     }
// }
// let pessoa2 = {
//     nome: 'Pietro',
//     idade: 22,
//     altura: 1.8,
//     cpf: '111.111.111-11',
//     solteiro: false,
//     habilidades: ['java','Angular','Typescript','Javascript','Node.js','Spring boot'],
//     endereço: {
//         rua: 'Rua feliz',
//         numero: 567,
//         estado: 'CE',
//         complemento: 'Sem complemento',
//         cep: '57010-161',
//     }
//     rg: '15481941', 
// }
interface Endereco{
    rua: string
    numero: number
    estado: string
    complemento: string
    cep: string
}

interface Pessoa {
    nome: string;
    idade: number;
    altura: number;
    cpf: string;
    solteiro: boolean;
    habilidade: string[]
    endereço: Endereco
    cumprimentar(): void;

}

const p:Pessoa = {
    nome: 'Daniel',
    idade: 30,
    altura: 1.72,
    cpf: '111.111.111-11',
    solteiro: false,
    habilidade: ['java','Angular','Typescript','Javascript','Node.js','Spring boot'],
    cumprimentar() {console.log('Salve' + this.nome)},
    endereço: {
        rua: 'Rua feliz',
        numero: 567,
        estado: 'CE',
        complemento: 'Sem complemento',
        cep: '57010-161',
    }
}