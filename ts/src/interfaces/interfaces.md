# O que são `interfaces`

Interfaces definem o FORMATO de um objeto.
```ts
interface User {
    name: string;
    idade: number;
}
```
A forma de utilizar a interface é:
```ts
let user02: User = {
    name: 'malu';
    idade: 23;
}
```

