// const pessoa: { nome: string; idade: number } = {
//     nome: 'Maria',
//     idade: 30,
// };

// pessoa.idade = 31;

// console.log(pessoa.nome);
// console.log(pessoa.idade);


const usuario = {
    nome: 'Malu',
    idade: 25,
    ativo: true
};
console.log(usuario)

usuario.nome = 'Joao'
console.log(usuario) // É possivel reatribuir o valor de uma propriedade


type Usuario {
    nome: string,
    idade: number,
    ativo: boolean,
}

const usuarioType: Usuario = {
    nome: 'malu User type',
    idade: 25,
    ativo: true
}


