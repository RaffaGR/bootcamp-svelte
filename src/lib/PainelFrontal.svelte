<script lang="ts">
  // Variáveis temporárias para o seu teste visual não quebrar agora.
  // A Pessoa 3 e 4 vão criar a lógica global real amanhã.
  let warp = false;
  let totalEnergy = 90;
  let shipName = "SS Svelte-V";
  let shields = 30;
  let thrusters = 25;
</script>

<section class="painel-frontal">
  <div class="ship-motion-rig" id="shipMotionRig">
    <!-- 1. PARA-BRISA SUPERIOR -->
    <div class="canopy-section">
      <!-- Exemplo de laço limpo sem repetir HTML -->
      <div class="ceiling-amber-lights">
        {#each Array(6) as _}<span></span>{/each}
      </div>
      <div class="windshield-hud">
        <span>PROPULSÃO SUB-LUZ ESTÁVEL</span>
      </div>
    </div>

    <!-- 2. BANCADA DOS MONITORES -->
    <div class="dashboard-housing">
      <div class="monitors-grid">
        <!-- MONITOR ESQUERDO -->
        <div class="monitor-unit monitor-left-unit">
          <div class="crt-screen screen-left">
            <div class="screen-top-bar">ESCUDOS <code>$state</code></div>
            <div class="left-side-telemetry">
              <div class="mini-stat-box">
                <small>ESCUDOS</small><strong>{shields}%</strong>
              </div>
            </div>
          </div>
        </div>

        <!-- MONITOR CENTRAL -->
        <div class="monitor-unit monitor-center-unit">
          <div class="crt-screen screen-center-top">
            <div class="center-data-matrix">
              <div class="matrix-header">TELEMETRIA <code>$derived</code></div>
              <div class="matrix-row">
                <span>NAVE:</span><strong>{shipName}</strong>
              </div>
              <div class="matrix-row">
                <span>ENERGIA TOTAL:</span><strong>{totalEnergy}%</strong>
              </div>
            </div>
          </div>

          <div class="crt-screen screen-center-bottom">
            <div class="reactor-right-alert">
              <span class="sys-tag">
                🌌 DOBRA: {#if warp}
                  ON
                {:else}
                  OFF
                {/if}
              </span>
              <strong class="live-alert-badge">
                {#if totalEnergy > 100}
                  🚨 SOBRECARGA
                {:else}
                  ✅ NOMINAL
                {/if}
              </strong>
            </div>
          </div>
        </div>

        <!-- MONITOR DIREITO -->
        <div class="monitor-unit monitor-right-unit">
          <div class="crt-screen screen-right">
            <div class="screen-top-bar">SISTEMAS</div>
            <div class="svelte-mini-monitor">
              <div class="s-line">
                <code>thrusters</code> <span>{thrusters}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. MESA DE COMANDO FÍSICA -->
    <div class="console-desk-wrapper">
      <div class="console-desk-surface">
        <div class="desk-bay bay-left">
          <div class="bay-header">
            <span>PROPULSÃO</span> <code>bind:value</code>
          </div>
          <div class="throttle-box">
            <label for="aceleradorInput">🚀 ACELERADOR:</label>
            <input
              id="aceleradorInput"
              type="range"
              bind:value={thrusters}
              min="0"
              max="50"
              class="deck-slider amber-slider"
            />
          </div>
        </div>

        <div class="desk-bay bay-center">
          <div class="bay-header">
            <span>SISTEMAS</span> <code>bind:checked</code>
          </div>
          <div class="center-switches-grid">
            <label class="deck-switch full-span">
              <input type="checkbox" bind:checked={warp} />
              <span class="switch-key amber-key">🌌 MOTOR DE DOBRA</span>
            </label>
          </div>
        </div>

        <div class="desk-bay bay-right">
          <div class="bay-header">
            <span>ROTAÇÃO</span> <code>style:transform</code>
          </div>
          <div class="knobs-row">
            <div class="knob-unit">
              <!-- Física reagindo diretamente ao valor do acelerador -->
              <div
                class="rotary-knob amber"
                style:transform="rotate({thrusters * 5}deg)"
              >
                <div class="knob-marker"></div>
              </div>
              <span>IMPULSO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
