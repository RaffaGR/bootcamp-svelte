<!-- JOÃO VITOR (Slides 23 a 25 — Exibição HTML: {#each}, {#if}/{:else} e style:transform em 1 só arquivo) -->
<script lang="ts">
  import { nave } from '../nave.svelte';

  let totalEnergy = $derived(nave.shields + nave.thrusters + nave.weapons);
</script>

<article>
  <h2>5. EXIBIÇÃO E REATIVIDADE <code>{'{#if} / {#each} / style:'}</code></h2>

  <!-- Slide 24: Laço {#each} nas 6 luzes + Condicional {#if}/{:else} de Sobrecarga -->
  <div class="luzes">
    {#each Array(6) as _}<span></span>{/each}
  </div>

  <p class="alerta" class:sobrecarga={totalEnergy > 100}>
    {#if totalEnergy > 100}
      SOBRECARGA ({totalEnergy}%)
    {:else}
      REATOR NOMINAL ({totalEnergy}%)
    {/if}
  </p>

  <!-- Slide 25: Velocímetros girando em tempo real com style:transform -->
  <section class="velocimetros">
    <figure>
      <div class="disco amber" style:transform="rotate({nave.thrusters * 5}deg)"></div>
      <figcaption>IMPULSO ({nave.thrusters}%)</figcaption>
    </figure>
    <figure>
      <div class="disco" style:transform="rotate({nave.shields * 5}deg)"></div>
      <figcaption>ESCUDOS ({nave.shields}%)</figcaption>
    </figure>
  </section>
</article>
