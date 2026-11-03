<script lang="ts">
  let activeTab = "livecode";
</script>

<section class="cabin-face cabin-back" id="cabinBack">
  <div class="rear-bulkhead-bg">
    <div class="bulkhead-door">
      <div class="door-light-strip"></div>
    </div>

    <div class="floating-hologram-panel">
      <div class="hologram-scanline"></div>

      <div class="holo-header">
        <div>
          <span class="holo-tag">HOLOGRAMA TRASEIRO DA NAVE</span>
          <h2>✨ Svelte 5</h2>
        </div>

        <div class="holo-tabs">
          <button
            class="holo-tab"
            class:active={activeTab === "livecode"}
            on:click={() => (activeTab = "livecode")}
          >
            1. Código
          </button>

          <button
            class="holo-tab"
            class:active={activeTab === "steps"}
            on:click={() => (activeTab = "steps")}
          >
            2. Passos
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
            4. Divisão
          </button>
        </div>

        <button class="btn-return-front" id="btnReturnFront">
          🔄 Voltar
        </button>
      </div>

      <div class="holo-quick-bar">
        <span>Controle:</span>
        <label for="holoShields">
          Escudos <input
            type="range"
            id="holoShields"
            min="0"
            max="50"
            value="30"
          />
        </label>
        <label for="holoThrusters">
          Propulsores <input
            type="range"
            id="holoThrusters"
            min="0"
            max="50"
            value="25"
          />
        </label>
        <label for="holoWeapons">
          Armas <input
            type="range"
            id="holoWeapons"
            min="0"
            max="50"
            value="15"
          />
        </label>
        <label for="holoWarp">
          <input type="checkbox" id="holoWarp" /> Dobra 4x
        </label>
      </div>

      {#if activeTab === "livecode"}
        <div class="holo-content active" id="htab-livecode">
          <div class="holo-split">
            <pre class="holo-code"><code>
&lt;script&gt;
  let shipName  = $state("SS Svelte-V");
  let shields   = $state(30);
  let thrusters = $state(25);
  let weapons   = $state(15);
  let life      = $state(20);
  let warp      = $state(false);

  let totalEnergy = $derived(shields + thrusters + weapons + life); 
  let speed = $derived(thrusters * 12 * (warp ? 4 : 1));
&lt;/script&gt;

&lt;input type="range" bind:value={"{"}thrusters{"}"} /&gt;
&lt;div class="knob" style:transform="rotate({"{"}thrusters * 5{"}"}deg)"&gt;&lt;/div&gt;
</code></pre>
          </div>
        </div>
      {/if}

      {#if activeTab === "steps"}
        <div class="holo-content active" id="htab-steps">
          <div class="steps-grid">
            <div class="step-box">
              <span class="step-num">1</span>
              <h4>$state</h4>
            </div>
            <div class="step-box">
              <span class="step-num">2</span>
              <h4>bind:value</h4>
            </div>
            <div class="step-box">
              <span class="step-num">3</span>
              <h4>$derived</h4>
            </div>
            <div class="step-box">
              <span class="step-num">4</span>
              <h4>style: e {"{#if}"}</h4>
            </div>
          </div>
        </div>
      {/if}

      {#if activeTab === "compare"}
        <div class="holo-content active" id="htab-compare">
          <div class="steps-grid">
            <div class="step-box highlight-svelte">
              <span class="step-num">SVELTE 5</span>
              <h4>Compilador</h4>
            </div>
            <div class="step-box">
              <span class="step-num">REACT / NEXT</span>
              <h4>Hooks e Re-render</h4>
              <p><code>{"onChange={(e) => setVal(+e.target.value)}"}</code></p>
            </div>
          </div>
        </div>
      {/if}

      {#if activeTab === "team"}
        <div class="holo-content active" id="htab-team">
          <div class="team-grid">
            <div class="team-item">1. Svelte (sem Virtual DOM).</div>
            <div class="team-item">2. <code>$state</code>.</div>
            <div class="team-item">
              3. <code>bind:value</code> e <code>bind:checked</code>.
            </div>
            <div class="team-item">4. <code>$derived</code>.</div>
            <div class="team-item">5. <code>{"{#if}"}</code>.</div>
            <div class="team-item">6. Desafio ao vivo!</div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</section>
