<script lang="ts">
  import PainelFrontal from './lib/PainelFrontal.svelte';
  import PainelTraseiro from './lib/PainelTraseiro.svelte';

  let lookingBack = $state(false);

  function toggleCamera() {
    lookingBack = !lookingBack;
  }
</script>

<!-- BARRA SUPERIOR DO CAPACETE DO PILOTO -->
<header class="pilot-helmet-hud">
  <div class="hud-left">
    <span class="badge-v2">SVELTE BOOTCAMP</span>
    <span class="hud-ship-id" id="topShipName">SS Svelte-V</span>
    <span class="hud-Speed-pill"><strong id="topSpeed">300</strong> km/s</span>
    <span class="hud-energy-pill" id="topEnergyPill"> Reator: <strong id="topEnergy">90%</strong></span>
  </div>

  <button 
    class="btn-turn-camera" 
    class:looking-back={lookingBack} 
    onclick={toggleCamera} 
    title="Atalho: Tecla Espaço"
  >
    <span class="turn-icon"></span>
    <span>{lookingBack ? 'Virar para Frente (Voltar ao Painel)' : 'Olhar para Trás (Painel do Tutorial)'}</span>
  </button>

  <div class="hud-right">
    <span class="preset-label">Cenários:</span>
    <button class="hud-preset" data-preset="balanced"> Normal</button>
    <button class="hud-preset" data-preset="combat">Combate</button>
    <button class="hud-preset" data-preset="stealth">Furtivo</button>
    <button class="hud-preset danger" data-preset="overload">Sobrecarga</button>
  </div>
</header>

<!-- CENA 3D (FRENTE = COCKPIT | TRÁS = TUTORIAL) -->
<div class="scene-viewport">
  <div class="camera-rig" class:look-back={lookingBack} id="cameraRig">
    <PainelFrontal />
    <PainelTraseiro />
  </div>
</div>
