# Uniao em variaveis (Union Types)

Uma união de tipos permite que uma variável aceite mais de um tipo.

Usamos o operador  'or':
```ts
let valor: string | number;
```

---

Isso significa que valor pode ser string ou number:
```ts
valor = "Malu"; // OK
valor = 25;     // OK
valor = true; // Erro
```

---
Também podemos limitar os valores possíveis:
```ts
let status: "ativo" | "inativo";

status = "ativo";   // OK
status = "inativo"; // OK
status = "pendente"; // Erro
```
Isso é útil quando você sabe exatamente quais valores uma variável pode receber.

---

# União em objetos
```ts
type Usuario = {
  id: number;
  nome: string;
  telefone: string | null;
};
```
Nesse caso, telefone pode ser uma string ou null:
```ts
const usuario: Usuario = {
  id: 1,
  nome: "Malu",
  telefone: null
};
```

Resumo: união de tipos significa “esse valor pode ser um tipo OU outro”, usando |.
