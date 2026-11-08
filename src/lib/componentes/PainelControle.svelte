<!-- PATRICK (Slides 18 a 22 — Botões e Campos com bind:value e onclick) -->
<script lang="ts">
  import { nave } from '../nave.svelte';
  import Botao from '../ui/Botao.svelte';

  function estabilizar() {
    nave.thrusters = 25;
    nave.shields = 30;
    nave.weapons = 15;
    nave.warp = false;
  }
</script>

<!-- Baia Esquerda: Campos de Entrada (<input type="range" bind:value>) -->
<article>
  <h2>4. CAMPOS DE ENTRADA <code>bind:value</code></h2>
  <label><span>ACELERADOR: <strong>{nave.thrusters}%</strong></span><input type="range" min="0" max="50" bind:value={nave.thrusters} /></label>
  <label><span>ESCUDOS: <strong>{nave.shields}%</strong></span><input type="range" min="0" max="50" bind:value={nave.shields} class="cyan" /></label>
  <label><span>ARMAS: <strong>{nave.weapons}%</strong></span><input type="range" min="0" max="50" bind:value={nave.weapons} /></label>
</article>

<!-- Baia Central: Botões de Ação reutilizando <Botao /> -->
<article>
  <h2>BOTÕES DE COMANDO <code>onclick</code></h2>
  <nav>
    <Botao texto="+10 IMPULSO" cor="amber" aoClicar={() => (nave.thrusters = Math.min(50, nave.thrusters + 10))} />
    <Botao texto="+10 ESCUDO" cor="cyan" aoClicar={() => (nave.shields = Math.min(50, nave.shields + 10))} />
    <Botao texto="ESTABILIZAR" cor="cyan" aoClicar={estabilizar} />
  </nav>
  <nav>
    <Botao texto={nave.warp ? 'DOBRA: LIGADA (4x)' : 'DOBRA: DESLIGADA'} cor="amber" aoClicar={() => (nave.warp = !nave.warp)} />
  </nav>
</article>
