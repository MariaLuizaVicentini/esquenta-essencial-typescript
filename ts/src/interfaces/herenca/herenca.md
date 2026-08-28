# Herança de interfaces (com objetos literais)

No TypeScript, uma interface pode herdar propriedades de outra interface usando extends.

Isso permite reutilizar uma estrutura existente e adicionar novas propriedades.

```ts
interface User {
    nome: string;
    password: string;
}

interface Admin extends User {
    permissions: string[];
}
```

Nesse caso, Admin possui todas as propriedades de User e também a propriedade permissions.

```ts
const admin01: Admin = {
    name: 'malu';
    password: 'senha123';
    permissions: ['create', 'delete'];
}
```
