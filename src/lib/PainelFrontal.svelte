<script lang="ts">
  // 👉 PESSOA 2 (Formato dos Dados - TS): Cria a interface TypeScript aqui.
  // 👉 PESSOA 3 (Memória - Reatividade): Cria as variáveis $state e $derived aqui.
  // 👉 PESSOA 4 (Regras - Funções): Cria as funções de clique e presets aqui.
  let warp = false;
  let totalEnergy = 90;
  let shipName = "SS Svelte-V";
</script>

<section class="painel-frontal">
  <!-- 👉 PESSOA 5 (Botões e Campos): Conecta os inputs e botões com bind:value e onclick aqui. -->
  <!-- 👉 PESSOA 6 (Exibição HTML): Aplica os blocos dinâmicos {#if} e {#each} aqui. -->
  <div class="ship-motion-rig" id="shipMotionRig">
    <!-- 1. PARA-BRISA SUPERIOR -->
    <div class="canopy-section">
      <canvas id="spaceCanvas"></canvas>
      <!-- 🧹 LIMPEZA 1: Trocando dezenas de spans por um {#each} -->
      <div class="ceiling-amber-lights">
        {#each Array(6) as _}<span></span>{/each}
      </div>
      <div class="canopy-pillar pillar-left">
        <div class="pillar-neon"></div>
      </div>
      <div class="canopy-pillar pillar-right">
        <div class="pillar-neon"></div>
      </div>
      <div class="windshield-hud" id="windshieldHud">
        <span id="windshieldStatus">PROPULSÃO SUB-LUZ ESTÁVEL</span>
      </div>
      <svg
        class="neon-trim-svg"
        viewBox="0 0 1200 45"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,40 L 80,22 L 420,22 L 460,6 L 740,6 L 780,22 L 1120,22 L 1200,40"
          class="neon-trim-glow"
        />
        <path
          d="M 0,40 L 80,22 L 420,22 L 460,6 L 740,6 L 780,22 L 1120,22 L 1200,40"
          class="neon-trim-core"
        />
      </svg>
    </div>

    <!-- 2. BANCADA DOS 3 MONITORES EMBUTIDOS -->
    <div class="dashboard-housing">
      <div class="monitors-grid">
        <!-- MONITOR ESQUERDO -->
        <div class="monitor-unit monitor-left-unit">
          <div class="top-red-bar"></div>
          <div class="monitor-body-row">
            <!-- 🧹 LIMPEZA 2: {#each} -->
            <div class="led-column" id="ledsLeftOuter">
              {#each Array(6) as _}<span></span>{/each}
            </div>

            <!-- Tela Ciano Esquerda -->
            <div class="crt-screen screen-left">
              <div class="screen-top-bar">
                <span>NAV-RADAR // ESCUDOS</span>
                <code>$state(shields)</code>
              </div>

              <div class="left-screen-main">
                <!-- Grande Radar Circular Ciano -->
                <div class="cyan-radar-circle">
                  <div class="radar-ring r-outer" id="leftRingOuter"></div>
                  <div class="radar-ring r-mid" id="leftRingMid"></div>
                  <div class="radar-crosshair"></div>

                  <!-- Bolha de Escudo Reativa -->
                  <div class="ship-shield-aura" id="shieldAura"></div>

                  <!-- Silhueta da Nave que se move pra frente ao acelerar -->
                  <div class="mini-ship-wrap" id="miniShipWrap">
                    <svg viewBox="0 0 100 120" class="mini-ship-svg">
                      <polygon
                        id="svgFlameL"
                        points="35,92 41,92 38,116"
                        class="svg-flame"
                      />
                      <polygon
                        id="svgFlameR"
                        points="59,92 65,92 62,116"
                        class="svg-flame"
                      />
                      <polygon
                        id="svgFlameC"
                        points="45,94 55,94 50,120"
                        class="svg-flame core"
                      />
                      <polygon
                        points="50,10 84,82 66,92 34,92 16,82"
                        class="svg-hull"
                      />
                      <polygon
                        points="50,22 68,76 50,84 32,76"
                        class="svg-deck"
                      />
                      <polygon
                        points="50,36 57,58 50,64 43,58"
                        class="svg-glass"
                      />
                      <circle
                        id="svgWeaponL"
                        cx="22"
                        cy="68"
                        r="4.5"
                        class="svg-weapon"
                      />
                      <circle
                        id="svgWeaponR"
                        cx="78"
                        cy="68"
                        r="4.5"
                        class="svg-weapon"
                      />
                    </svg>
                  </div>
                </div>

                <!-- Indicadores laterais dentro da tela esquerda -->
                <div class="left-side-telemetry">
                  <div class="mini-stat-box">
                    <small>ESCUDOS</small>
                    <strong id="scrShields">30%</strong>
                  </div>
                  <div class="mini-stat-box">
                    <small>ABSORÇÃO</small>
                    <strong id="scrAbsorption">60%</strong>
                  </div>
                  <div class="mini-stat-box">
                    <small>ARMAS</small>
                    <strong id="scrWeapons">15%</strong>
                  </div>
                </div>
              </div>

              <div class="screen-bottom-wave">
                <div class="wave-bar">
                  <div
                    class="wave-fill"
                    id="leftWaveFill"
                    style="width: 60%"
                  ></div>
                </div>
                <span id="radarStatusText">ASSINATURA VISÍVEL</span>
              </div>
            </div>

            <!-- Coluna de LEDs Laranjas Direita -->
            <!-- 🧹 LIMPEZA 3: {#each} -->
            <div class="led-column" id="ledsLeftInner">
              {#each Array(6) as _}<span></span>{/each}
            </div>
          </div>
        </div>

        <!-- MONITOR CENTRAL: TELA SUPERIOR (2 MEDIDORES LARANJAS + DADOS) + TELA INFERIOR (REATOR) -->
        <div class="monitor-unit monitor-center-unit">
          <!-- Tela Central Superior -->
          <div class="crt-screen screen-center-top">
            <div class="center-gauges-row">
              <!-- Medidor Semicircular Laranja Esquerdo (Temperatura) -->
              <div class="semi-gauge-box">
                <div class="semi-gauge">
                  <div class="semi-needle" id="tempNeedle"></div>
                  <span class="semi-val" id="scrTemp">488°C</span>
                </div>
                <small>TEMP. NÚCLEO</small>
              </div>

              <!-- Matriz de Dados Central -->
              <div class="center-data-matrix">
                <div class="matrix-header">
                  TELEMETRIA DERIVADA (<code>$derived</code>)
                </div>
                <div class="matrix-row">
                  <span>NAVE:</span>
                  <strong id="matrixShipName">SS Svelte-V</strong>
                </div>
                <div class="matrix-row">
                  <span>ENERGIA TOTAL:</span>
                  <strong id="matrixEnergy">90% / 100%</strong>
                </div>
                <div class="matrix-row">
                  <span>VELOCIDADE:</span>
                  <strong id="matrixSpeed">300 km/s</strong>
                </div>
                <div class="matrix-row">
                  <span>SUPORTE VIDA:</span>
                  <strong id="matrixLife">20% (OK)</strong>
                </div>
                <div class="matrix-row">
                  <span>AUTONOMIA:</span>
                  <strong id="matrixAutonomy">11.1 h</strong>
                </div>
              </div>

              <!-- Medidor Semicircular Laranja Direito (Impulso) -->
              <div class="semi-gauge-box">
                <div class="semi-gauge">
                  <div class="semi-needle" id="thrustNeedle"></div>
                  <span class="semi-val" id="scrThrust">25%</span>
                </div>
                <small>PROPULSÃO</small>
              </div>
            </div>
          </div>

          <!-- Sub-Painel Central Inferior (Anel Laranja do Reator + Alertas {#if}) -->
          <div class="crt-screen screen-center-bottom" id="centerBottomScreen">
            <div class="reactor-left-stats">
              <span class="sys-tag" id="tagCooling">❄️ REFRIG: OFF</span>
              <span class="sys-tag" id="tagStealth">🕵️ STEALTH: OFF</span>
            </div>

            <!-- Medidor Circular Laranja do Reator (Igual ao centro-baixo da foto) -->
            <div class="orange-reactor-dial" id="orangeReactorDial">
              <div class="orange-dial-ring"></div>
              <div class="orange-dial-core">
                <strong id="reactorBigPercent">90%</strong>
                <small>REATOR</small>
              </div>
            </div>

            <div class="reactor-right-alert">
              <!-- 🧠 LÓGICA 1: Trocando texto fixo pelo bloco {#if} -->
              <span class="sys-tag">
                🌌 DOBRA: {#if warp}
                  ON
                {:else}
                  OFF
                {/if}
              </span>
              <!-- 🧠 LÓGICA 2: Alerta dinâmico de sobrecarga -->
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

        <!-- MONITOR DIREITO: GIROSCÓPIO DE PROPULSÃO CIANO + VARIÁVEIS SVELTE -->
        <div class="monitor-unit monitor-right-unit">
          <div class="top-red-bar"></div>
          <div class="monitor-body-row">
            <!-- Botões verticais azuis/laranjas da moldura (igual à foto) -->
            <div class="bezel-mini-buttons">
              <span class="b-blue"></span>
              <span class="b-blue"></span>
              <span class="b-knob"></span>
              <span class="b-amber"></span>
              <span class="b-amber"></span>
            </div>

            <!-- Tela Ciano Direita -->
            <div class="crt-screen screen-right">
              <div class="screen-top-bar">
                <span>PROPULSÃO &amp; ESTADO SVELTE</span>
                <code>$derived</code>
              </div>

              <div class="right-screen-main">
                <!-- Coluna de Estado Svelte em Tempo Real -->
                <div class="svelte-mini-monitor">
                  <div class="s-line">
                    <code>shields</code> <span id="monShields">30</span>
                  </div>
                  <div class="s-line">
                    <code>thrusters</code> <span id="monThrusters">25</span>
                  </div>
                  <div class="s-line">
                    <code>weapons</code> <span id="monWeapons">15</span>
                  </div>
                  <div class="s-line">
                    <code>life</code> <span id="monLife">20</span>
                  </div>
                  <div class="s-line derived">
                    <code>total</code> <span id="monTotal">90%</span>
                  </div>
                </div>

                <!-- Grande Anel Circular Ciano Direito (Motor / Giroscópio) -->
                <div class="cyan-radar-circle right-gyro">
                  <div class="radar-ring r-outer" id="rightRingOuter"></div>
                  <div class="radar-ring r-mid" id="rightRingMid"></div>
                  <div class="gyro-horizon" id="gyroHorizon"></div>
                  <div class="gyro-center-readout">
                    <strong id="gyroSpeedNum">300</strong>
                    <small>km/s</small>
                  </div>
                </div>
              </div>
              <div class="screen-bottom-wave">
                <button class="btn-inline-tutorial" id="btnScreenTutorial">
                  ✨ Clique aqui ou no topo para virar para trás e ver o
                  Tutorial Svelte 5
                </button>
              </div>
            </div>

            <!-- 🧹 LIMPEZA 4: {#each} -->
            <div class="led-column" id="ledsRightOuter">
              {#each Array(6) as _}<span></span>{/each}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. MESA DE COMANDO FÍSICA INFERIOR (O pedaço que faltava!) -->
    <div class="console-desk-wrapper">
      <div class="console-desk-surface">
        <div class="desk-bay bay-left">
          <div class="bay-header">
            <span>CONTROLE DE PROPULSÃO &amp; ESCUDOS</span>
            <code>bind:value</code>
          </div>
          <div class="throttle-and-sliders">
            <div class="throttle-box">
              <label for="thrustersInput"
                >🚀 ACELERADOR (PROPULSORES): <strong id="lblThrusters"
                  >25%</strong
                ></label
              >
              <input
                type="range"
                id="thrustersInput"
                min="0"
                max="50"
                value="25"
                class="deck-slider amber-slider"
              />
              <small>Aumente para ver a nave acelerar e balançar!</small>
            </div>

            <!-- Fileira de Botões Quadrados Laranjas e Azuis (Igual ao canto inferior esquerdo da foto!) -->
            <div class="throttle-box">
              <label for="shieldsInput"
                >🛡️ ESCUDOS DEFLETORES: <strong id="lblShields">30%</strong
                ></label
              >
              <input
                type="range"
                id="shieldsInput"
                min="0"
                max="50"
                value="30"
                class="deck-slider cyan-slider"
              />
            </div>
          </div>

          <!-- Fileira de Botões Quadrados Laranjas e Azuis (Igual ao canto inferior esquerdo da foto!) -->
          <div class="illuminated-pads-row">
            <button
              class="glow-pad amber-pad"
              data-boost="shields"
              title="+10% Escudos">🛡️ +ESC</button
            >
            <button
              class="glow-pad amber-pad"
              data-boost="thrusters"
              title="+10% Propulsão">🚀 +IMP</button
            >
            <button
              class="glow-pad cyan-pad"
              data-boost="balance"
              title="Estabilizar">⚖️ ESTAB</button
            >
          </div>
        </div>

        <!-- PEDESTAL CENTRAL: MÓDULOS DE SISTEMA + IDENTIFICAÇÃO DA NAVE -->
        <div class="desk-bay bay-center">
          <div class="bay-header">
            <span>CONSOLE CENTRAL // SISTEMAS</span>
            <code>bind:checked</code>
          </div>

          <div class="ship-id-row">
            <input
              type="text"
              id="shipNameInput"
              value="SS Svelte-V"
              maxlength="20"
              title="bind:value={shipName}"
            />
          </div>

          <!-- Botões Físicos dos Módulos (Cooling, Stealth, Warp) -->
          <div class="center-switches-grid">
            <label class="deck-switch">
              <input type="checkbox" id="coolingCheck" />
              <span class="switch-key cyan-key">❄️ REFRIGERAÇÃO</span>
            </label>

            <label class="deck-switch">
              <input type="checkbox" id="stealthCheck" />
              <span class="switch-key cyan-key">🕵️ CAMUFLAGEM</span>
            </label>

            <label class="deck-switch full-span">
              <input type="checkbox" id="warpCheck" />
              <span class="switch-key amber-key"
                >🌌 MOTOR DE DOBRA (4x VELOCIDADE)</span
              >
            </label>
          </div>

          <div class="amber-light-bar"></div>
        </div>

        <!-- BANCADA DIREITA: BOTÕES QUE GIRAM (KNOBS ROTATIVOS) + ARMAS & SUPORTE DE VIDA -->
        <div class="desk-bay bay-right">
          <div class="bay-header">
            <span>BOTÕES GIRATÓRIOS (KNOBS) &amp; ARMAS</span>
            <code>style:transform</code>
          </div>

          <!-- 4 Knobs que giram fisicamente conforme os valores mudam! -->
          <div class="knobs-row">
            <div class="knob-unit" data-target="shieldsInput">
              <div class="rotary-knob" id="knobShields">
                <div class="knob-marker"></div>
              </div>
              <span>ESCUDOS</span>
            </div>

            <div class="knob-unit" data-target="thrustersInput">
              <div class="rotary-knob amber" id="knobThrusters">
                <div class="knob-marker"></div>
              </div>
              <span>IMPULSO</span>
            </div>

            <div class="knob-unit" data-target="weaponsInput">
              <div class="rotary-knob amber" id="knobWeapons">
                <div class="knob-marker"></div>
              </div>
              <span>ARMAS</span>
            </div>

            <div class="knob-unit" data-target="lifeInput">
              <div class="rotary-knob green" id="knobLife">
                <div class="knob-marker"></div>
              </div>
              <span>OXIGÊNIO</span>
            </div>
          </div>

          <!-- Sliders de Armas e Suporte de Vida -->
          <div class="right-sliders-compact">
            <div class="compact-slider-row" id="weaponsBox">
              <label for="weaponsInput"
                >⚔️ CANHÕES: <strong id="lblWeapons">15%</strong></label
              >
              <input
                type="range"
                id="weaponsInput"
                min="0"
                max="50"
                value="15"
                class="deck-slider amber-slider"
              />
            </div>
            <div class="compact-slider-row">
              <label for="lifeInput"
                >🌱 OXIGÊNIO (O₂): <strong id="lblLife">20%</strong></label
              >
              <input
                type="range"
                id="lifeInput"
                min="0"
                max="50"
                value="20"
                class="deck-slider cyan-slider"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* CSS do Painel Frontal */
</style>
