type Usuario = {
    nome: string;
    idade: number;
};

type UsuarioComId = Usuario & {
    id: number;
};

const db: UsuarioComId[] = [];

function createUser(payload: Usuario) {
    const data: UsuarioComId = {
        ...payload,
        id: db.length + 1
    };

    db.push(data);

    return 'Sucesso: Usuario criado';
}


function listUsers(): Usuario[] {
    const users = db;
    
    return users;
}

function verificaSeUserExiste(id: number) {
    if (!id) {
        return 'Erro: id Vazio';
    }
    
    const findUser = db.find((user: UsuarioComId) => user.id === id);
    
    if (!findUser) {
        return 'Erro: esse id nao existe no banco de dados';
    }
    
    return findUser;
}

function editUsers(payload: Usuario) {
    let newUser = payload;
    
}


let user01: string = createUser({nome: 'malu', idade: 23 })
console.log ( user01)

let listandoUsers: object = listUsers();
console.log( listandoUsers)

// let editandoUser = editUsers(1)
// console.log(editandoUser)
