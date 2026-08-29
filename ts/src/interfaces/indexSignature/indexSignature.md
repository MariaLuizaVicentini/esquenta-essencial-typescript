# Indice de assinatura (Index SIgnature)

Ela é usada quando você sabe que um objeto terá propriedades com nomes dinâmicos, mas quer definir quais tipos os valores dessas propriedades podem ter.

```ts
interface Computador {
    marca: string;
    modelo: string;
    placaMae: string;
    [extra: string]: string | number | boolean;
}
```
`extra`
- É apenas o nome dado ao parm da assinatura, poderia ser qualquer outro

`string`
- Significa que as chaves serao string

`string | number | boolean`
-  Define os tipos permitidos pra valores dessas chaves


Em resumo: Index Signature permite definir o tipo de propriedades dinâmicas de um objeto quando você não conhece antecipadamente o nome dessas propriedades.