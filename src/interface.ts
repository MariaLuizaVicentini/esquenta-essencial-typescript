interface Usuario {
    nome: string;
    email: string;
    senha: string;
}

interface UsuarioDb {
    id: number;
    ativo: boolean;
}

interface ListUsers {
    users: object[]
}


let user01: Usuario = {
    nome: 'malu',
    email: 'vicentinimalu1@gmail.com',
    senha: '123senha'
}

console.log(user01)