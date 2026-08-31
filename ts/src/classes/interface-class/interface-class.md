# Criando interface para o objeto que a classe vai moldar
- Sabemos que interfaces no TypeScript definem o FORMATO do objeto:
```ts
interface AulaProps {
    id: number;
    nome: string;
    duracaoEmSegundos: number;
}
```
---
# Utilizando a interface criada
```ts
class Aula {
    constructor(readonly props: AulaProps) {}

    get id(): number {
        return this.props.id;
    }

    get nome(): string {
        return this.props.nome;
    }

    get duracaoEmSegundos(): number {
        return this.props.duracaoEmSegundos;
    }

    duracaoEmHM(): string {
        const horas = Math.floor(this.duracaoEmSegundos / 3600);

        const minutos = Math.floor(
            (this.duracaoEmSegundos % 3600) / 60
        );

        return `${horas}h ${minutos}m`;
    }
}
```
`readonly props: AulaProps`
- Para instanciarmos a classe Aula, precisamos passar as propriedades seguindo o formato da interface AulaProps.
- readonly indica que a propriedade props não pode receber uma nova atribuição depois de inicializada.

`get id(): number`
- Acessa o objeto instanciado e retorna o id (number).

`get nome(): string`
- Acessa o objeto instanciado e retorna o nome (string).

`get duracaoEmSegundos(): number`
- Acessa o objeto instanciado e retorna a duração em segundos da aula (number).

`duracaoEmHM(): string`
- Utiliza o valor atual da propriedade duracaoEmSegundos para transformar os dados e retornar o valor em horas e minutos.


# Instanciando objeto da classe com uso da interface
```ts
const aula = new Aula({
    id: 1,
    nome: 'Introdução ao TypeScript',
    duracaoEmSegundos: 6000,
});

console.log(aula.nome);

console.log(aula.duracaoEmHM());

console.log(aula.props);
```

Resumo: a interface AulaProps define o formato dos dados que a classe Aula recebe através da propriedade props.