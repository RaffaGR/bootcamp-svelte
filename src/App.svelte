<!-- RAFAEL (Slides 3 a 8 — Esqueleto Principal e Montagem dos Componentes em App.svelte) -->
<script lang="ts">
  import { nave } from './lib/nave.svelte';
  import MonitorDados from './lib/componentes/MonitorDados.svelte';
  import MonitorMemoria from './lib/componentes/MonitorMemoria.svelte';
  import RegistroNave from './lib/componentes/RegistroNave.svelte';
  import PainelControle from './lib/componentes/PainelControle.svelte';
  import PainelExibicao from './lib/componentes/PainelExibicao.svelte';
</script>

<header>
  <strong>SVELTE BOOTCAMP</strong>
  <span>{nave.shipName}</span>
</header>

<main style:--impulso={nave.thrusters} class:dobra={nave.warp}>
  <!-- 1. PARA-BRISA SUPERIOR COM ESTRELAS NO CSS -->
  <section class="teto">
    <p>{nave.decolou ? 'NAVE EM VOO ESPACIAL' : 'AGUARDANDO DECOLAGEM'}</p>
  </section>

  <!-- 2. BANCADA DOS 3 MONITORES (Leandro | Matheus | Pedro) -->
  <section class="monitores">
    <MonitorDados />
    <MonitorMemoria />
    <RegistroNave />
  </section>

  <!-- 3. MESA DE COMANDO INFERIOR (Patrick | João Vitor) -->
  <section class="mesa">
    <PainelControle />
    <PainelExibicao />
  </section>
</main>
