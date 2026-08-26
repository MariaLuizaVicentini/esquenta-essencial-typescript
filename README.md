
# Instalando o TypeScript

Podemos utilizar o NPM para instalar o TypeScript como uma dependência de desenvolvimento do projeto:

```bash
npm install typescript --save-dev
```

Esse comando instala o compilador TypeScript (`tsc`) localmente no projeto.

Mesmo em um projeto que não utiliza nenhum framework, podemos utilizar o TypeScript normalmente.

## ts-node

O `ts-node` permite executar arquivos TypeScript diretamente com o Node.js, sem precisar convertê-los manualmente para JavaScript antes de cada teste.

```bash
npm install -D ts-node
```

O Node.js, nativamente, entende apenas JavaScript. Sem uma ferramenta como o `ts-node`, o fluxo tradicional seria:

1. Compilar o TypeScript para JavaScript:

```bash
npx tsc
```

2. Executar o arquivo JavaScript gerado com o Node.js:

```bash
node arquivoGerado.js
```

# Inicializando o TypeScript

Depois de instalar o TypeScript, podemos criar o arquivo de configuração `tsconfig.json` com:

```bash
npx tsc --init
```

Esse comando cria o arquivo:

```text
tsconfig.json
```

O `tsconfig.json` é o arquivo de configuração do TSC. Ele define as regras utilizadas durante a compilação e como os arquivos TypeScript serão convertidos para JavaScript.

# Configurações essenciais do tsconfig.json

## target

Define a versão do JavaScript para a qual o TypeScript será compilado.

Exemplo:

```json
{
  "target": "ES2020"
}
```

Nesse caso, o código TypeScript será convertido para JavaScript compatível com ES2020.

---

## module

Define qual sistema de módulos será utilizado no JavaScript gerado.

Exemplo:

```json
{
  "module": "CommonJS"
}
```

---

## strict

Ativa um conjunto de verificações mais rigorosas de tipos durante a compilação.

Exemplo:

```json
{
  "strict": true
}
```

Isso ajuda o TypeScript a identificar possíveis problemas de tipagem durante o desenvolvimento.

---

## outDir

Define onde os arquivos JavaScript gerados pela compilação serão armazenados.

Exemplo:

```json
{
  "outDir": "./dist"
}
```

Se o arquivo original estiver em:

```text
src/tipos/basico-01.ts
```

o arquivo compilado poderá ser gerado em:

```text
dist/tipos/basico-01.js
```

---

## rootDir

Define onde estão os arquivos-fonte TypeScript do projeto.

Exemplo:

```json
{
  "rootDir": "./src"
}
```

Nesse caso, o TypeScript considera a pasta `src` como a raiz dos arquivos-fonte.


----

# Comando pra executar um arquivo TS e testar as configs:
```
npx ts-node ts/src/tipos/basico-01.ts
```