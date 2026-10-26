<script lang="ts">
  import PainelFrontal from './lib/PainelFrontal.svelte';
  import PainelTraseiro from './lib/PainelTraseiro.svelte';
</script>

<main class="cena-3d">
  <PainelFrontal />
  <PainelTraseiro />
</main>

<style>
  .cena-3d {
    min-height: 100vh;
  }
</style>