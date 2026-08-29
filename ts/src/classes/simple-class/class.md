# classes simples em typescript

Apesar do JS ser uma linguagem procedural, é possivel escrever codigo seguindo os paradigmas da programacao orientada a objeto. 

Conseguimos definir as propriedades e metodos do objeto a partir de uma classe.

```ts
class Usuario {
    id: number;
    nome: string;
    email: string;
    senha?: string | null;
    ativo: boolean;

    constructor(id: number, nome: string, email: string, ativo: boolean, senha: string | null = null) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.ativo = ativo;
        this.senha = senha;
    }
}
```

Pra instanciarmos o objeto:
```ts
const usuario: Usuario = new Usuario(1, 'malu', 'malu@dev.com.br', true);
console.log(usuario);

```
