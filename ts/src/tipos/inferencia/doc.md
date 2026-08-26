# Inferencia de tipos

Uma das partes mais importantes do TypeScript é que você não precisa declarar explicitamente o tipo sempre.

Voce escreve:
```ts
let idade = 25;
```

O TS entende:
```ts
let idade: number;
```

Se voce tentar atribuir a variavel a outro valor com um tipo diferente, a propria IDE vai avisar:

```ts
let idade = 'malu' // O tipo 'string' não pode ser atribuído ao tipo 'number'.
```
