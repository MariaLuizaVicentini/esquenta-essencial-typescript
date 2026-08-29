
# O que e `partial`

É um tipo utilitário do TypeScript que transforma as propriedades de um tipo em opcionais.

Sintaxe basica:
```ts
Partial<TipoOriginal>
```
Suponhamos que uma interface foi definida para um produto:
```ts
inferface Produto {
    nome: string;
    preco: string;
    imagem: string;
}
```

Agora queremos criar um objeto a partir da interface, mas ainda não temos os dados suficientes:

```ts
const produtoIncompleto: Partial<Produto> = {
    nome: 'caneta bic';
    preco: '2.00';
}
```
Usamos Partial quando podemos enviar somente uma parte do objeto.

# O que é tipo genérico

O Generic permite trabalharmos com diferentes tipos sem perder a tipagem.

sintaxe:
```ts
<T>
```

Usamos para deixar explícito que T representa o tipo que será definido posteriormente.
