<!-- MATHEUS (Slides 13 e 14 — Memória Reativa na Tela com $state e $derived) -->
<script lang="ts">
  import { nave } from '../nave.svelte';

  let totalEnergy = $derived(nave.shields + nave.thrusters + nave.weapons);
  let velocidade = $derived(nave.thrusters * 12 * (nave.warp ? 4 : 1));
</script>

<article>
  <h2>2. MEMÓRIA REATIVA <code>$state / $derived</code></h2>
  <ul>
    <li><span>PROPULSORES ($state):</span><strong>{nave.thrusters}%</strong></li>
    <li><span>ESCUDOS ($state):</span><strong>{nave.shields}%</strong></li>
    <li><span>ARMAS ($state):</span><strong>{nave.weapons}%</strong></li>
    <li><span>VELOCIDADE ($derived):</span><strong>{velocidade} km/s</strong></li>
    <li><span>ENERGIA TOTAL ($derived):</span><strong>{totalEnergy}%</strong></li>
  </ul>
</article>
