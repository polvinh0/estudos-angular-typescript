"use strict";
const p = {
    nome: 'Daniel',
    idade: 30,
    altura: 1.72,
    cpf: '111.111.111-11',
    solteiro: false,
    habilidade: ['java', 'Angular', 'Typescript', 'Javascript', 'Node.js', 'Spring boot'],
    cumprimentar() { console.log('Salve' + this.nome); },
    endereço: {
        rua: 'Rua feliz',
        numero: 567,
        estado: 'CE',
        complemento: 'Sem complemento',
        cep: '57010-161',
    }
};
