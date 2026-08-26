# Tipagem de Funcoes basicas

Bloco de codigo que pode receber valores, executar uma logica, e opcionalmente, retornar um valor. 

Podemos tipar os parametros:
```ts
function somar(a: number, b: number): number {
  return a + b;
}
```

Podemos tipar o retorno:
```ts
function nome(parametro: tipo): tipoDoRetorno {
  // ...
}
```

E tambem definir os parametros como opcionais, usando `?` :

```ts
function apresentar(nome: string, idade?: number) {
  console.log(nome);
}
```
- Agora podemos chamar das duas formas:
```ts
apresentar("Malu"); // opcionalmente passamos a idade
apresentar("Malu", 25);
```

---
# TIpagem de Funcoes sem retorno  ( void )

Elas executam alguma acao, mas nao retornam nenhum valor util.

```ts
function bomDia(): void {
    console.log('Bom dia!');
}

bomDia();
```

---

# Tipagem com Arrow Functions

uma forma curta e prática de criar funções, especialmente funções pequenas e callbacks.

Sua sintaxe basica:
```ts
const nomeDaFuncao = (parametros) => {
  // código
};
```

Em vez de:
```ts
function somar(a: number, b: number) {
  return a + b;
}
```

Podemos escrever:
```ts
const somar = (a: number, b: number) => a + b;
```

