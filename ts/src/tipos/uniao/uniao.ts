let id: string | number = 5;

id = 'f4a460f0-0b3b-4b3b-8b3b-0b3b4b3b8b3b';

// id = true; // erro


let status: 'ativo' | 'inativo';

status = 'ativo';
status = 'inativo';
// status = 'pendente'; // erro


type Usuario = {
    nome: string,
    tel: string | null;
}; 

const usuario_01: Usuario = {
    nome: 'Maluzeira',
    tel: null,
}


