# Bootcamp Svelte — A Interface Viva (Painel da Nave)

---

# 1. Setup (Rafael)
> **Objetivo desta etapa:** Criar o repositório Svelte, documentar os comandos de inicialização, a estrutura da raiz e as **3 divisões do protótipo `.svelte`** (`<script>`, HTML e `<style>`).

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

2. **Respostas nas perguntas que aparecem no terminal** *(apague abaixo o que não tiver aparecido no seu terminal)*:
   - **`Ok to proceed? (y)`**: Digitamos `y` e apertamos `Enter` (confirma o download do criador do Vite).
   - **`Select a framework:`**: Escolhemos **`Svelte`** com as setinhas do teclado e `Enter`.
   - **`Select a variant:`**: Escolhemos **`TypeScript`**.
     - *Por que TypeScript e não JavaScript?* Porque na **Etapa 2** do nosso grupo vamos criar uma `interface` para tipar os dados da nave (igual fizemos em `model/produto.ts` no Angular), e `interface` é um recurso do TypeScript.
   - **`Install with npm and start now?`**: Escolhemos Yes
     - Se escolher **`Yes`**, ele já roda o `npm install` e o `npm run dev` sozinho.
     - Se escolher **`No`** (ou quando outro membro do grupo baixar do GitHub), basta rodar manualmente os comandos abaixo:

### Comandos para quem baixar o projeto do GitHub:
```bash
# 1. Entrar na pasta do projeto
cd bootcamp-svelte

# 2. Instalar a pasta node_modules com os pacotes do Svelte
npm install

# 3. Ligar o servidor local (no Vite o comando padrão é npm run dev em vez de npm start)
npm run dev
```
> *💡 Dica sobre o `npm start`:* No Vite, o script padrão vem com o nome `"dev": "vite"`, por isso rodamos **`npm run dev`** (mas se adicionarmos `"start": "vite"` dentro de `"scripts"` no `package.json`, o `npm start` também funciona!).

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
  - **Svelte Atual (versão 5 instalada aqui):** Usa as *Runes* **`$state(...)`**, **`$derived(...)`** e **`onclick={funcao}`** (sem dois-pontos, igual ao HTML normal!).

---

## 1.4. Explicação das Pastas da Raiz (Seguindo o padrão da Aula 1 do Professor)

Quando o projeto é inicializado, ele cria automaticamente esta estrutura na raiz:

- 📁 **`node_modules/`**: Guarda todas as bibliotecas baixadas pelo `npm install` (não vai para o GitHub por causa do `.gitignore`).
- 📁 **`public/`**: Pasta para arquivos estáticos e imagens.
  - Colocando as 5 imagens `.jpg` do nosso painel aqui dentro de `public/` (em vez de `src/assets/`), não precisamos dar `import` nelas no TypeScript — basta escrever `/cockpit-front-bg.jpg` direto no HTML ou no CSS!
- 📁 **`src/`**: Pasta onde fica o nosso código-fonte e nossos componentes:
  - 📁 **`src/lib/`**: **Pasta onde criamos os nossos Componentes Svelte!** (ex: `PainelFrontal.svelte` e `PainelTraseiro.svelte`). É o equivalente às pastas de componentes que criávamos no Angular, só que aqui cada componente é apenas 1 arquivo `.svelte`.
  - 📄 **`src/App.svelte`**: O componente raiz da aplicação (igual ao `app.ts`/`app.html` do Angular), responsável por importar e exibir os componentes da pasta `src/lib/` (a parte frontal do cockpit e a parte traseira do tutorial).
  - 📄 **`src/main.ts`**: Arquivo que inicializa o `App.svelte` e joga ele dentro da `<div id="app">` do `index.html`.
  - 📄 **`src/app.css`**: Arquivo de CSS global da página inteira.
    - *⚠️ Pegadinha importante do Vite:* Por padrão, o Vite coloca um `max-width: 1280px; display: flex; place-items: center; text-align: center;` dentro do `src/app.css`. Se não apagarmos isso, o painel da nave fica todo espremido no meio da tela! Por isso deixamos o `src/app.css` limpo apenas com o reset básico.
- 📄 **`package.json`**: Lista os comandos (`npm run dev`, `npm run build`) e a versão do Svelte e do TypeScript.
- 📄 **`vite.config.ts` e `tsconfig.json`**: Arquivos de configuração do Vite e do TypeScript (equivalentes ao `angular.json` e `tsconfig.json` do projeto Angular).

---

## 1.5. Como Criar e Importar Componentes no Svelte (Não existe comando no terminal!)

Na **Aula 2 de Angular**, aprendemos que para criar um componente era obrigatório rodar um comando no terminal (`ng generate component` ou `ng g c`), porque o Angular precisava gerar 4 arquivos separados (`.ts`, `.html`, `.css`, `.spec.ts`) e configurar o `@Component`.

**⚠️ Nuance importante: No Svelte NÃO existe comando no terminal para criar componente!**
Como no Svelte um componente inteiro é apenas **1 arquivo terminado em `.svelte`**, você cria componentes manualmente direto pelo VS Code:
1. Clica com o **botão direito na pasta `src/lib/`** -> **`Novo Arquivo` (`New File`)**;
2. Digita o nome do componente começando com **Letra Maiúscula** e terminando em **`.svelte`**.

No nosso Setup, deixamos criados **2 componentes** dentro da pasta `src/lib/`:
- 📄 **`src/lib/PainelFrontal.svelte`**: Componente do Cockpit da Nave (onde ficam os monitores, estrelas, botões e toda a lógica das **Etapas 2, 3, 4, 5 e 6**).
- 📄 **`src/lib/PainelTraseiro.svelte`**: Componente da visão traseira da cabine (onde fica o Painel Flutuante do Tutorial).

E dentro do arquivo principal **`src/App.svelte`**, nós apenas importamos esses dois componentes e usamos como tags HTML:

**📄 Local deste arquivo: `src/App.svelte`**
```svelte
<script lang="ts">
  // Importando os 2 componentes que criamos na pasta src/lib/
  import PainelFrontal from './lib/PainelFrontal.svelte';
  import PainelTraseiro from './lib/PainelTraseiro.svelte';
</script>

<main class="cena-3d">
  <!-- Componente da Frente da Nave -->
  <PainelFrontal />

  <!-- Componente de Trás da Nave (Holograma Flutuante) -->
  <PainelTraseiro />
</main>
```
> **Por que começa com Letra Maiúscula?** No Svelte, o nome do componente importado sempre começa com letra maiúscula (`<PainelFrontal />`) para o compilador diferenciar um componente nosso de uma tag HTML comum (`<div>`, `<main>`).

---

## 1.6. As 3 Divisões de um Arquivo `.svelte` (`script`, `HTML` e `style`)

Quando você cria um arquivo `.svelte` novo no VS Code (como o `src/lib/PainelFrontal.svelte`), **ele nasce completamente em branco**. Diferente do Angular (que espalhava o componente em 3 arquivos `.ts`, `.html` e `.css`), no Svelte nós mesmos escrevemos as **3 divisões dentro desse único arquivo**.

Veja abaixo onde cada integrante do grupo (Etapas 2 a 6) vai colocar sua parte dentro do componente **`src/lib/PainelFrontal.svelte`**:

**📄 Local deste arquivo: `src/lib/PainelFrontal.svelte`**
```svelte
<!-- 1ª DIVISÃO: <script lang="ts"> (A Lógica / Equivalente ao arquivo .ts do Angular) -->
<script lang="ts">
  // 👉 PESSOA 2 (Formato dos Dados - TS): Cria a interface TypeScript aqui.
  // 👉 PESSOA 3 (Memória - Reatividade): Cria as variáveis $state e $derived aqui.
  // 👉 PESSOA 4 (Regras - Funções): Cria as funções de clique e presets aqui.
  //
  // Não existe "export class" nem "this."! Qualquer variável criada aqui, já pode ser usada direto no HTML abaixo apenas abrindo chaves {nomeDaVariavel}.
</script>

<!-- 2ª DIVISÃO: HTML (A Tela / Equivalente ao arquivo .html do Angular) -->
<section class="painel-frontal">
  <!-- Aqui fica o HTML puro do painel, sem precisar colocar dentro de "return" ou "<template>". -->
  <!-- 👉 PESSOA 5 (Botões e Campos): Conecta os inputs e botões com bind:value e onclick aqui. -->
  <!-- 👉 PESSOA 6 (Exibição HTML): Aplica os blocos dinâmicos {#if} e {#each} aqui. -->
</section>

<!-- 3ª DIVISÃO: <style> (O Visual / Equivalente ao arquivo .css do Angular) -->
<style>
  /* Todo o CSS escrito aqui vale APENAS para este arquivo (escopo isolado). */
</style>
```

---

## 1.7. Resumo do que foi configurado manualmente nos arquivos deste Setup

Para deixar a estrutura 100% pronta para o grupo após criar o projeto no terminal, foram feitos estes **4 passos manuais**:

### 1.7.1. Criação manual dos 2 componentes em `src/lib/`
- Foi apagado o componente de exemplo `src/lib/Counter.svelte` que vinha no template do Vite;
- Clicando com o botão direito em `src/lib/` -> `Novo Arquivo`, foram criados manualmente os arquivos **`src/lib/PainelFrontal.svelte`** e **`src/lib/PainelTraseiro.svelte`** já com o esqueleto das 3 divisões (`<script lang="ts">`, `<section>` e `<style>`).

### 1.7.2. Importação dos componentes no `src/App.svelte`
- Foi apagado o código de boas-vindas do Vite em **`src/App.svelte`** e adicionado o `import` do `PainelFrontal` e do `PainelTraseiro` dentro do `<main class="cena-3d">`.

### 1.7.3. Limpeza do estilo global em `src/app.css`
- Foi removido o CSS padrão do Vite em **`src/app.css`** (que limitava a largura da tela em `1126px` e centralizava tudo) e aplicado apenas o reset básico (`box-sizing: border-box; margin: 0; padding: 0;`) com o fundo escuro espacial.

### 1.7.4. Adição das 5 imagens 3D na pasta `public/`
- Foram copiadas as 5 imagens do protótipo (`cockpit-front-bg.jpg`, `cockpit-rear-bg.jpg`, `knob-3d.jpg`, `btn-amber-3d.jpg` e `btn-cyan-3d.jpg`) para dentro de **`public/`**.

---
---

# 📋 Próximas Etapas do Grupo (Espaço para os demais integrantes)

## 2. Formato dos Dados (TS) — `[Nome do Integrante]`
> **O que fazer:** Olhar os dados que já existem no protótipo HTML (`shipName`, `shields`, `thrusters`, `weapons`, `life`, `cooling`, `stealth`, `warp`, `lookingBack`) e criar a `interface` TypeScript no topo do `<script lang="ts">` com aqueles mesmos nomes.

- *Documentação / Notas de quem fez a Etapa 2:*
  - (Espaço reservado para o integrante 2 documentar sua parte)

---

## 3. Memória (Reatividade) — `[Nome do Integrante]`
> **O que fazer:** Pegar as variáveis de estado do protótipo HTML e converter para `$state(...)` e os cálculos automáticos (`totalEnergy`, `coreTemp`, `speed`, `absorption`, `autonomy`) para `$derived(...)` dentro do `<script lang="ts">`, mantendo os mesmos nomes. *(Equivalente ao `signal()` e `computed()` que vimos no Angular, porém mais simples!).*

- *Documentação / Notas de quem fez a Etapa 3:*
  - (Espaço reservado para o integrante 3 documentar sua parte)

---

## 4. Regras (Funções) — `[Nome do Integrante]`
> **O que fazer:** Pegar as funções JS que já estão prontas no protótipo (como girar a câmera 180° para trás/frente, aplicar os cenários rápidos/presets, aumentar escudos/propulsão nos botões e girar pelos knobs) e passar para a sintaxe do Svelte dentro do `<script lang="ts">`.

- *Documentação / Notas de quem fez a Etapa 4:*
  - (Espaço reservado para o integrante 4 documentar sua parte)

---

## 5. Botões e Campos — `[Nome do Integrante]`
> **O que fazer:** Como já sabemos os nomes das variáveis e funções pelo protótipo, ligar o `bind:value`, `bind:checked` e o `onclick` nos inputs, sliders e botões do HTML sem precisar esperar os membros 3 e 4.

- *Documentação / Notas de quem fez a Etapa 5:*
  - (Espaço reservado para o integrante 5 documentar sua parte)

---

## 6. Exibição (HTML) — `[Nome do Integrante]`
> **O que fazer:** Pegar o HTML estático/gerado do protótipo e aplicar os blocos `{#each}` e `{#if}` (equivalentes ao `@for` e `@if` do Angular) usando os nomes das variáveis que já estão definidos no protótipo.

- *Documentação / Notas de quem fez a Etapa 6:*
  - (Espaço reservado para o integrante 6 documentar sua parte)
