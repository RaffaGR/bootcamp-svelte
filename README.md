# Bootcamp Svelte — A Interface Viva (Painel da Nave)

---

# 1. Setup (Rafael)
> **Objetivo desta etapa:** Criar o repositório Svelte, documentar os comandos de inicialização, a estrutura da raiz e as **3 divisões do arquivo `.svelte`** (`<script>`, HTML e `<style>`).

---

## 1.1. O que é o Vite e por que usamos ele?

Nas aulas de Angular com o professor, nós instalamos o `@angular/cli` e usamos os comandos `ng new` (para criar o projeto) e `ng serve` (para rodar o servidor local).

No **Svelte**, quem faz exatamente esse papel de criar o projeto e rodar o servidor local é o **Vite**:
- Ele levanta o servidor de desenvolvimento na porta (`http://localhost:5173`);
- Atualiza a página no navegador instantaneamente toda vez que salvamos um arquivo;
- E chama o **compilador do Svelte** por baixo dos panos para transformar nossos arquivos `.svelte` e `.ts` em HTML, CSS e JavaScript super leves.
- *(Curiosidade: a partir do Angular 17+, até o próprio comando `ng serve` do Angular também usa o Vite por baixo dos panos!).*

---

## 1.2. Passo a Passo de Criação do Projeto

> **Por que usamos `npm create vite@latest` em vez do `npx sv create` do topo do site oficial?**
> Na página inicial da documentação oficial do Svelte (`svelte.dev/docs/svelte/getting-started`), o primeiro comando mostrado (`npx sv create`) instala o **SvelteKit** (que é um framework full-stack com rotas e servidor SSR, equivalente ao NextJS).
> Porém, como no PDF do seminário o professor separou `ReactJS` de `NextJS` e pediu apenas **`Svelte`**, nós seguimos a seção oficial logo abaixo na documentação chamada **"Alternatives to SvelteKit"**. Isso cria o **Svelte puro (sem SSR)**, que é exatamente a mesma ideia de quando o professor usou `--no-ssr` nas aulas de Angular (`ng new loja-tp1-angular --style=css --no-ssr`).

### Comandos executados para criar o projeto do zero:

1. No terminal, rodamos o criador oficial com Vite:
   ```bash
   npm create vite@latest bootcamp-svelte
   ```

2. **Respostas nas perguntas que aparecem no terminal:**
   - **`Ok to proceed? (y)`**: Digitamos `y` e apertamos `Enter` (confirma o download do criador do Vite).
   - **`Select a framework:`**: Escolhemos **`Svelte`** com as setinhas do teclado e `Enter`.
   - **`Select a variant:`**: Escolhemos **`TypeScript`**.
     - *Por que TypeScript e não JavaScript?* Porque na **Etapa 2** do nosso grupo vamos criar uma `interface` para tipar os dados da nave (igual fizemos em `model/produto.ts` no Angular), e `interface` é um recurso do TypeScript.
   - **`Install with npm and start now?`**: Escolhemos `Yes`.

### Comandos para quem baixar o projeto do GitHub:
```bash
# 1. Entrar na pasta do projeto
cd bootcamp-svelte

# 2. Instalar a pasta node_modules com os pacotes do Svelte
npm install

# 3. Ligar o servidor local (no Vite o comando padrão é npm run dev em vez de npm start)
npm run dev
```

---

## 1.3. Detalhe importante sobre a Versão (`Svelte` vs `Svelte 5`)

Ao abrir o arquivo `package.json`, vocês vão ver:
```json
"svelte": "^5.57.2"
```
**O que isso significa?**
- **Não existe outro framework chamado "Svelte 5"**, o nome do framework é apenas **Svelte**, e `5` é a versão atual que é instalada automaticamente.
- **Por que é importante o grupo saber disso ao pesquisar dúvidas na internet?**
  - **Svelte Antigo (versões 3 e 4):** Usava `let x = 10` normal, `$: total = x * 2` para cálculos derivados e `on:click={funcao}` (com dois-pontos) nos botões.
  - **Svelte Atual (versão 5 instalada aqui):** Usa as *Runes* **`$state(...)`**, **`$derived(...)`**, **`$props()`**, **`$bindable()`** e **`onclick={funcao}`** (sem dois-pontos, igual ao HTML normal!).

---

## 1.4. Explicação das Pastas da Raiz (Seguindo o padrão da Aula 1 do Professor)

Quando o projeto é inicializado, ele cria automaticamente esta estrutura na raiz:

- 📁 **`node_modules/`**: Guarda todas as bibliotecas baixadas pelo `npm install` (não vai para o GitHub por causa do `.gitignore`).
- 📁 **`public/`**: Pasta para arquivos estáticos e imagens (`cockpit-front-bg.jpg`, `knob-3d.jpg`, `btn-amber-3d.jpg`, `btn-cyan-3d.jpg`).
- 📁 **`src/`**: Pasta onde fica o nosso código-fonte e nossos componentes:
  - 📁 **`src/lib/`**: **Pasta onde criamos os nossos Componentes Svelte e módulos TS!**
    - 📄 **`src/lib/tipos.ts`** + **`src/lib/componentes/MonitorDados.svelte`**: Interface TypeScript `Nave` e 1º Monitor com a anatomia SFC (**Leandro**).
    - 📄 **`src/lib/nave.svelte.ts`** + **`src/lib/componentes/MonitorMemoria.svelte`**: Memória compartilhada `$state` e 2º Monitor com `$derived` (**Matheus**).
    - 📄 **`src/lib/componentes/RegistroNave.svelte`**: 3º Monitor com formulário e regras de validação (**Pedro**).
    - 📄 **`src/lib/ui/Botao.svelte`** + **`src/lib/componentes/PainelControle.svelte`**: Mesa de comando com `<Botao>` reutilizável (`$props`, `onclick`) e campos `bind:value` (**Patrick**).
    - 📄 **`src/lib/componentes/PainelExibicao.svelte`**: Mesa direita reunindo `{#each}`, `{#if}/{:else}` e velocímetros com `style:transform` (**João Vitor**).
  - 📄 **`src/App.svelte`**: O componente raiz da aplicação (igual ao `app.ts`/`app.html` do Angular), responsável por montar o esqueleto do cockpit e importar os componentes (**Rafael**).
  - 📄 **`src/main.ts`**: Arquivo que inicializa o `App.svelte` e joga ele dentro da `<div id="app">` do `index.html`.
  - 📄 **`src/app.css`**: Arquivo de CSS global da página inteira.
- 📄 **`package.json`**: Lista os comandos (`npm run dev`, `npm run build`, `npm run check`) e a versão do Svelte e do TypeScript.
- 📄 **`vite.config.ts` e `tsconfig.json`**: Arquivos de configuração do Vite e do TypeScript.

---

## 1.5. Como Criar e Importar Componentes no Svelte (Não existe comando no terminal!)

Na **Aula 2 de Angular**, aprendemos que para criar um componente era obrigatório rodar um comando no terminal (`ng generate component` ou `ng g c`), porque o Angular precisava gerar 4 arquivos separados (`.ts`, `.html`, `.css`, `.spec.ts`) e configurar o `@Component`.

**⚠️ Nuance importante: No Svelte NÃO existe comando no terminal para criar componente!**
Como no Svelte um componente inteiro é apenas **1 arquivo terminado em `.svelte`**, você cria componentes manualmente direto pelo VS Code:
1. Clica com o **botão direito na pasta `src/lib/`** -> **`Novo Arquivo` (`New File`)**;
2. Digita o nome do componente começando com **Letra Maiúscula** e terminando em **`.svelte`**.

Para deixar a apresentação clara e didática, separamos **1 componente curto para cada conceito**, e no **`src/App.svelte`** apenas importamos e posicionamos cada um nas 3 áreas do cockpit (Teto, Monitores e Mesa de Comando):

```svelte
<script lang="ts">
  import { nave } from './lib/nave.svelte';
  import MonitorDados from './lib/componentes/MonitorDados.svelte';
  import MonitorMemoria from './lib/componentes/MonitorMemoria.svelte';
  import RegistroNave from './lib/componentes/RegistroNave.svelte';
  import PainelControle from './lib/componentes/PainelControle.svelte';
  import PainelExibicao from './lib/componentes/PainelExibicao.svelte';
</script>
```
> **Por que começa com Letra Maiúscula?** No Svelte, o nome do componente importado sempre começa com letra maiúscula (`<MonitorDados />`) para o compilador diferenciar um componente nosso de uma tag HTML comum (`<div>`, `<section>`).

---

## 1.6. As 3 Divisões de um Arquivo `.svelte` (`script`, `HTML` e `style`)

Quando você cria um arquivo `.svelte` novo no VS Code, **ele nasce completamente em branco**. Diferente do Angular (que espalhava o componente em 3 arquivos `.ts`, `.html` e `.css`), no Svelte nós mesmos escrevemos as **3 divisões dentro desse único arquivo**:

```svelte
<!-- 1ª DIVISÃO: <script lang="ts"> (A Lógica / Equivalente ao arquivo .ts do Angular) -->
<script lang="ts">
  // Não existe "export class" nem "this."! Qualquer variável criada aqui já pode ser usada direto no HTML.
</script>

<!-- 2ª DIVISÃO: HTML (A Tela / Equivalente ao arquivo .html do Angular) -->
<section>
  <!-- HTML semântico puro, sem precisar de "return" ou "<template>". -->
</section>

<!-- 3ª DIVISÃO: <style> (O Visual / Equivalente ao arquivo .css do Angular) -->
<style>
  /* Todo o CSS escrito aqui vale APENAS para este arquivo (escopo isolado). */
</style>
```

---
---

# 📋 Divisão Equilibrada (~11 min por Integrante)

| Integrante | Tópico nos Slides | Arquivo(s) para apresentar (~30–38 linhas por membro) |
|---|---|---|
| **1. Rafael** (Slides 3–8) | Setup, estrutura `.svelte` e esqueleto do Cockpit | `src/App.svelte` |
| **2. Leandro** (Slides 9–12) | Formato dos Dados (`interface Nave`) + Anatomia SFC (Monitor 1) | `src/lib/tipos.ts` + `src/lib/componentes/MonitorDados.svelte` |
| **3. Matheus** (Slides 13–14) | Memória Reativa (`$state` e `$derived` no Monitor 2) | `src/lib/nave.svelte.ts` + `src/lib/componentes/MonitorMemoria.svelte` |
| **4. Pedro** (Slides 15–17) | Regras e Validações de Formulário (Monitor 3) | `src/lib/componentes/RegistroNave.svelte` |
| **5. Patrick** (Slides 18–22) | Botões e Campos (`<Botao onclick>` e `<input bind:value>` na Mesa Esquerda/Central) | `src/lib/ui/Botao.svelte` + `src/lib/componentes/PainelControle.svelte` |
| **6. João Vitor** (Slides 23–25) | Exibição HTML, `{#each}`, `{#if}/{:else}` e `style:transform` (Mesa Direita) | `src/lib/componentes/PainelExibicao.svelte` |
