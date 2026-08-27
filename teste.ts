type Usuario = {
    id: number;
    nome: string;
    idade: number;
};


const db: any = []

function createUser (paylaod: Usuario) {
    let data = paylaod;
    if (!data) {
        return 'ta vazia essa merda'
    }
    db.push(data)
    return 'Usuario criado';
}

function listUsers (): string {
    const users = JSON.stringify(db);
    return users;
}

function editUsers (id: number) {
    if (!id) {
        return 'ta vazia essa merda'
    }
    const findUser = db.find((user: any) => user.id == id);
    if (!findUser) {
        return 'nao tem esse usuario noia no db'
    }

    // 
    return findUser;
}

const user01 = createUser({ id: 1, nome: 'maluzeira', idade: 23});
const user02 = createUser({ id: 2, nome: 'joao', idade: 28});

const renameUser = editUsers(1);
console.log(renameUser);