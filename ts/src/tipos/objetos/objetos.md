# Objetos

Um objeto em TypeScript é uma estrutura formada por propriedades, e cada propriedade possui um tipo.

```ts
const usuario = {
  nome: "Malu",
  idade: 25,
  ativo: true
};
```

O TypeScript infere os tipos:
```ts
// nome: string
// idade: number
// ativo: boolean
```

Reatribuindo valor de uma propriedade:
```ts
usuario.nome = "Maria";
usuario.idade = 30;

console.log(usuario.nome);  // Maria
console.log(usuario.idade); // 30
```

---

### Tipando explicitamente:
- Você pode definir os tipos das propriedades:
```ts
const usuario: {
  nome: string;
  idade: number;
  ativo: boolean;
} = {
  nome: "Malu",
  idade: 25,
  ativo: true
};
```

Agora o TypeScript impede valores incompatíveis:
```ts
usuario.idade = "25"; // Erro
```

---

### Propriedade opcional
Use ? quando uma propriedade pode não existir:
```ts
const usuario: {
  nome: string;
  idade?: number;
} = {
  nome: "Malu"
};
```

---