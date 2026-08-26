# Type Alias (Nomeando tipos)

type alias serve para dar um nome a um tipo, para que você possa reutilizá-lo.

Sem 'alias type'
```ts
const usuario: {
  nome: string;
  idade: number;
} = {
  nome: "João",
  idade: 25
};
```

Com 'alias type'
```ts
type Usuario = {
  nome: string;
  idade: number;
};

const usuario: Usuario = {
  nome: "João",
  idade: 25
};
```

Reutilizacao:
```ts
type Usuario = {
  nome: string;
  idade: number;
};

const usuario1: Usuario = {
  nome: "João",
  idade: 25
};

const usuario2: Usuario = {
  nome: "Maria",
  idade: 30
};
```

### Também funciona com tipos simples
```ts
type ID = string | number;

let id: ID;

id = 10;
id = "abc";
```

### Também funciona com união
```ts
type Status = "ativo" | "inativo" | "bloqueado";

let status: Status;

status = "ativo";    // OK
status = "inativo";  // OK
status = "pendente"; // Erro
```

Isso evita repetir tipos e deixa o código mais organizado.