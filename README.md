# Esquenta Essencial - TypesScript

TypeScript é um superset do JavaScript.
Nenhum servidor ou navegador processa TypeScript diretamente.
Portanto, o TypeScript precisa ser compilado/convertido para JavaScript.
JavaScript é uma linguagem que pode ser processada tanto pelo navegador quanto pelo servidor, por exemplo, utilizando Node.js.

O JS:
O JavaScript possui tipagem dinâmica.
Isso significa que os tipos de uma determinada variável ou propriedade podem mudar durante a execução:
```js
let valor = 'texto';

valor = 10;

console.log(valor)
```
- Nesse exemplo, a mesma variável recebeu primeiro uma string e depois um number.

O TS:
O TypeScript possui tipagem estática.
Isso significa que os tipos são verificados durante a compilação, antes da execução do código.
```ts
let valor: string = 'texto';

valor = 10;

console.log(valor) // Erro de tipo
```
- O responsável por realizar a compilação do TypeScript para JavaScript é o TypeScript Compiler, conhecido como TSC.

# Instalando o TypeScript
Podemos utilizar o NPM para instalar o TypeScript como uma dependência de desenvolvimento do projeto:
```bash
npm install typescript --save-dev
```
Mesmo em um projeto que não utiliza nenhum framework, podemos utilizar o TypeScript normalmente.

Esse comando instala o compilador TypeScript (tsc) localmente no projeto.

# Inicializando o Typescript

Depois de instalar o TypeScript, podemos criar o arquivo de configuração tsconfig.json com:
```bash
npx tsc --init
```
Esse comando crio o arquivo:
```json
tsconfig.json
```
- O tsconfig.json é o arquivo de configuração do TSC. Ele define as regras utilizadas durante a compilação e como os arquivos TypeScript serão convertidos para JavaScript.

# Configurações essenciais do tsconfig.json

target
- Define a versão do JavaScript para a qual o TypeScript será compilado.

Exemplo:
```json
{
    "target": "ES2020"
}
```
- Nesse caso, o código TypeScript será convertido para JavaScript compatível com ES2020.

---
module
- Define qual sistema de módulos será utilizado no JavaScript gerado.

Exemplo:
```json
{
  "module": "CommonJS"
}
```
---

strict
- Ativa um conjunto de verificações mais rigorosas de tipos durante a compilação.

Exemplo:
```json
{
  "strict": true
}
```
- Isso ajuda o TypeScript a identificar possíveis problemas de tipagem durante o desenvolvimento.

--
outDir
- Define onde os arquivos JavaScript gerados pela compilação serão armazenados.

Exemplo:
```json
{
  "outDir": "./dist"
}
```
- Se o arquivo original estiver em:
```bash
src/tipos/basico-01.ts
```
- o arquivo compilado poderá ser gerado em:
```bash
dist/tipos/basico-01.js
```

---
rootDir
- Define onde estão os arquivos-fonte TypeScript do projeto.
Exemplo:
```json
{
  "rootDir": "./src"
}
```
- Nesse caso, o TypeScript considera a pasta src como a raiz dos arquivos-fonte.