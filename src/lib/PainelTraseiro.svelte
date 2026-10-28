<script lang="ts">
  // 👉 PESSOA 6: Neste ecrã, o seu desafio é o menu do holograma (as Abas).
  // No Angular, usaria um ngClass para saber qual aba está ativa.
  // Aqui no Svelte, a Pessoa 4 criará uma variável de estado,
  // mas para já usamos esta variável temporária para testar:
  let activeTab = "livecode";
</script>

<section class="cabin-face cabin-back" id="cabinBack">
  <div class="rear-bulkhead-bg">
    <div class="bulkhead-door">
      <div class="door-light-strip"></div>
    </div>

    <!-- PAINEL FLUTUANTE DO TUTORIAL (HOLOGRAMA 3D) -->
    <div class="floating-hologram-panel">
      <div class="hologram-scanline"></div>

      <div class="holo-header">
        <div>
          <span class="holo-tag">HOLOGRAMA TRASEIRO DA NAVE // MODO AULA</span>
          <h2>✨ Tutorial Interativo: O Segredo do Svelte 5</h2>
        </div>

        <div class="holo-tabs">
          <!-- 🧠 LÓGICA 3: O Svelte altera a classe dinamicamente caso a aba esteja ativa -->
          <!-- O "on:click" é o equivalente do Svelte ao (click) do Angular -->
          <button
            class="holo-tab"
            class:active={activeTab === "livecode"}
            on:click={() => (activeTab = "livecode")}
          >
            1. Código Ao Vivo
          </button>

          <button
            class="holo-tab"
            class:active={activeTab === "steps"}
            on:click={() => (activeTab = "steps")}
          >
            2. Passo a Passo
          </button>

          <button
            class="holo-tab"
            class:active={activeTab === "compare"}
            on:click={() => (activeTab = "compare")}
          >
            3. Svelte vs Outros
          </button>

          <button
            class="holo-tab"
            class:active={activeTab === "team"}
            on:click={() => (activeTab = "team")}
          >
            4. Divisão (6 Pessoas)
          </button>
        </div>

        <button class="btn-return-front" id="btnReturnFront">
          🔄 Virar para Frente (Voltar ao Painel)
        </button>
      </div>

      <div class="holo-quick-bar">
        <span>🎮 Teste mexer aqui mesmo e veja o código Svelte reagir:</span>
        <label
          >🛡️ Escudos <input
            type="range"
            id="holoShields"
            min="0"
            max="50"
            value="30"
          /></label
        >
        <label
          >🚀 Propulsores <input
            type="range"
            id="holoThrusters"
            min="0"
            max="50"
            value="25"
          /></label
        >
        <label
          >⚔️ Armas <input
            type="range"
            id="holoWeapons"
            min="0"
            max="50"
            value="15"
          /></label
        >
        <label><input type="checkbox" id="holoWarp" /> 🌌 Dobra 4x</label>
      </div>

      <!-- 🧠 LÓGICA 4: O bloco {#if} controla o que aparece na tela do holograma dependendo do menu selecionado -->

      {#if activeTab === "livecode"}
        <!-- ABA HOLO 1: CÓDIGO SVELTE 5 AO VIVO -->
        <div class="holo-content active" id="htab-livecode">
          <div class="holo-split">
            <pre class="holo-code"><code
                ><span class="hc-com">&lt;script&gt;</span>
  <span class="hc-com">// 1. $state cria variáveis reativas</span>
  <span class="hc-kw">let</span> shipName  = <span class="hc-fn">$state</span
                >(<span class="hc-live" id="hcName">"SS Svelte-V"</span>);
  <span class="hc-kw">let</span> shields   = <span class="hc-fn">$state</span
                >(<span class="hc-live" id="hcShields">30</span>);
  <span class="hc-kw">let</span> thrusters = <span class="hc-fn">$state</span
                >(<span class="hc-live" id="hcThrusters">25</span>);
  <span class="hc-kw">let</span> weapons   = <span class="hc-fn">$state</span
                >(<span class="hc-live" id="hcWeapons">15</span>);
  <span class="hc-kw">let</span> life      = <span class="hc-fn">$state</span
                >(<span class="hc-live" id="hcLife">20</span>);
  <span class="hc-kw">let</span> warp      = <span class="hc-fn">$state</span
                >(<span class="hc-live" id="hcWarp">false</span>);

  <span class="hc-com">// 2. $derived recalcula automaticamente!</span>
  <span class="hc-kw">let</span> totalEnergy = <span class="hc-fn"
                  >$derived</span
                >(
    shields + thrusters + weapons + life
  ); <span class="hc-com"
                  >// 👉 Agora: <span class="hc-live" id="hcTotal">90</span
                  >%</span
                >

  <span class="hc-kw">let</span> speed = <span class="hc-fn">$derived</span>(
    thrusters * 12 * (warp ? 4 : 1)
  ); <span class="hc-com"
                  >// 👉 Agora: <span class="hc-live" id="hcSpeed">300</span
                  > km/s</span
                >
<span class="hc-com">&lt;/script&gt;</span>

<span class="hc-com"
                  >&lt;!-- 3. bind:value conecta o slider direto ao estado --&gt;</span
                >
&lt;<span class="hc-tag">input</span> <span class="hc-attr">type</span
                >="range" <span class="hc-attr">bind:value</span
                >={"{"}thrusters{"}"} /&gt;

<span class="hc-com"
                  >&lt;!-- 4. Fazendo o botão girar e a nave balançar com CSS Reativo --&gt;</span
                >
&lt;<span class="hc-tag">div</span> <span class="hc-attr">class</span
                >="knob" <span class="hc-attr">style:transform</span
                >="rotate({"{"}thrusters * 5{"}"}deg)"&gt;&lt;/<span
                  class="hc-tag">div</span
                >&gt;</code
              ></pre>

            <div class="holo-explain-cards">
              <div class="holo-card">
                <h3>🔥 O que vocês provam para a sala?</h3>
                <p>
                  Todo aquele cockpit espacial da frente — os 3 monitores, os
                  medidores laranjas, os botões giratórios e o balanço da nave —
                  é controlado apenas por esses números reativos.
                </p>
              </div>
              <div class="holo-card">
                <h3>⚡ Sem tocar no DOM</h3>
                <p>
                  No JavaScript tradicional, cada mudança exige atualizar 20
                  elementos na mão. No <strong>Svelte 5</strong>, você muda
                  <code>thrusters</code> e o compilador atualiza a velocidade, o
                  giroscópio, as chamas e o balanço da cabine instantaneamente!
                </p>
              </div>
            </div>
          </div>
        </div>
      {/if}

      {#if activeTab === "steps"}
        <!-- ABA HOLO 2: TUTORIAL PASSO A PASSO -->
        <div class="holo-content active" id="htab-steps">
          <div class="steps-grid">
            <div class="step-box">
              <span class="step-num">PASSO 1</span>
              <h4>Estado Reativo (<code>$state</code>)</h4>
              <p>
                Criamos a energia de cada sistema da nave com <code
                  >let shields = $state(30)</code
                >. Quando esse número muda, a interface inteira sabe que precisa
                reagir.
              </p>
            </div>
            <div class="step-box">
              <span class="step-num">PASSO 2</span>
              <h4>Conexão Direta (<code>bind:value</code>)</h4>
              <p>
                Em vez de criar funções <code>onChange</code>, colocamos
                <code>bind:value={"{"}shields{"}"}</code> no slider da mesa de comando.
                O controle e a variável viram uma coisa só.
              </p>
            </div>
            <div class="step-box">
              <span class="step-num">PASSO 3</span>
              <h4>Valores Derivados (<code>$derived</code>)</h4>
              <p>
                A carga do reator (<code>totalEnergy</code>), temperatura e
                velocidade são calculadas com <code>$derived(...)</code>. Elas
                nunca ficam desatualizadas.
              </p>
            </div>
            <div class="step-box">
              <span class="step-num">PASSO 4</span>
              <h4>
                Física e Visual (<code>style:</code> e <code>{"{#if}"}</code>)
              </h4>
              <p>
                A rotação dos botões (knobs), o balanço da nave ao acelerar e o
                alerta vermelho de sobrecarga (&gt;100%) usam as próprias
                variáveis direto no HTML!
              </p>
            </div>
          </div>
        </div>
      {/if}

      {#if activeTab === "compare"}
        <!-- ABA HOLO 3: COMPARATIVO SVELTE VS OUTROS -->
        <div class="holo-content active" id="htab-compare">
          <div class="steps-grid">
            <div class="step-box highlight-svelte">
              <span class="step-num">SVELTE 5 (COMPILADOR)</span>
              <h4>Menos código, mais performance</h4>
              <p>
                O Svelte compila seu código antes de ir pro navegador. Não
                existe Virtual DOM pesado recalculando toda a árvore da nave
                quando você gira um botão.
              </p>
            </div>
            <div class="step-box">
              <span class="step-num">REACT / NEXT</span>
              <h4>Precisa de Hooks e Re-render</h4>
              <p>
                Exigiria vários <code>useState</code>, funções
                <code>{"onChange={(e) => setVal(+e.target.value)}"}</code> em cada
                controle e cuidado para não travar a animação das estrelas.
              </p>
            </div>
          </div>
        </div>
      {/if}

      {#if activeTab === "team"}
        <!-- ABA HOLO 4: DIVISÃO PARA 6 PESSOAS -->
        <div class="holo-content active" id="htab-team">
          <div class="team-grid">
            <div class="team-item">
              <strong>Integrante 1:</strong> O que é Svelte e por que ele é um compilador
              (sem Virtual DOM).
            </div>
            <div class="team-item">
              <strong>2. Integrante 2:</strong> Criando a energia da nave com a
              rune <code>$state</code>.
            </div>
            <div class="team-item">
              <strong>3. Integrante 3:</strong> Conectando a mesa de controle
              com <code>bind:value</code> e <code>bind:checked</code>.
            </div>
            <div class="team-item">
              <strong>4. Integrante 4:</strong> Telemetria automática nos 3
              monitores com <code>$derived</code>.
            </div>
            <div class="team-item">
              <strong>5. Integrante 5:</strong> Animação da nave balançando,
              knobs girando e alertas com <code>{"{#if}"}</code>.
            </div>
            <div class="team-item">
              <strong>6. Integrante 6:</strong> Desafio ao vivo com a sala pilotando
              o painel!
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>

<style>
  /* CSS do Painel Traseiro */
</style>
