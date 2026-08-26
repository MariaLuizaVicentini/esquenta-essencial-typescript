# Esquenta Essencial — TypeScript

TypeScript é um superset do JavaScript.

Nenhum servidor ou navegador processa TypeScript diretamente. Por isso, o código TypeScript precisa ser compilado para JavaScript.

O JavaScript pode ser processado tanto pelo navegador quanto pelo servidor, por exemplo, utilizando Node.js.

## JavaScript

O JavaScript possui **tipagem dinâmica**. Isso significa que os tipos de uma variável ou propriedade podem mudar durante a execução:

```js
let valor = 'texto';

valor = 10;

console.log(valor);
```

Nesse exemplo, a mesma variável recebeu primeiro uma `string` e depois um `number`.

## TypeScript

O TypeScript possui **tipagem estática**. Isso significa que os tipos são verificados durante a compilação, antes da execução do código.

```ts
let valor: string = 'texto';

valor = 10;

console.log(valor); // Erro de tipo
```

O responsável por realizar a compilação do TypeScript para JavaScript é o **TypeScript Compiler**, conhecido como **TSC**.
