<!-- LEANDRO (Slide 11 — Anatomia do Svelte SFC: <script>, HTML e <style> exibindo os dados tipados) -->
<script lang="ts">
  import { nave } from '../nave.svelte';
</script>

<article>
  <h2>1. DADOS DA NAVE <code>interface Nave</code></h2>
  <ul>
    <li><span>NOME (string):</span><strong>{nave.shipName}</strong></li>
    <li><span>PILOTO (string):</span><strong>{nave.emailPiloto || 'Não registrado'}</strong></li>
    <li><span>TRIPULANTES (number):</span><strong>{nave.tripulantes}</strong></li>
    <li><span>DOBRA (boolean):</span><strong class="destaque">{nave.warp ? 'true (Ativa)' : 'false (Inativa)'}</strong></li>
    <li><span>EM VOO (boolean):</span><strong class="destaque">{nave.decolou ? 'true (Sim)' : 'false (Não)'}</strong></li>
  </ul>
</article>

<style>
  .destaque { color: #00e5ff; }
</style>
