# Any (Tipagem genérica)

Essa tipagem `Any` representa um tipo genérico
- Significa, que a variável pode receber qualquer tipo, e o TSC não vai fazer a verificação de tipo dela.

```ts
let x: any = 5;

console.log(x);

x = "João";

console.log(x);

x = [1, 2, 3, 4];

console.log(x);
```

A mesma variavel `x` recebe:
```ts
5              // number
"João"         // string
[1, 2, 3, 4]   // number[]
```
