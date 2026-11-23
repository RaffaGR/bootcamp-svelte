<script lang="ts">
  import { fly } from 'svelte/transition';
  import { nave } from '../nave.svelte';
  import MonitorDados from './MonitorDados.svelte';
  import MonitorMemoria from './MonitorMemoria.svelte';
  import RegistroNave from './RegistroNave.svelte';
</script>

{#if nave.exibirPainel}
  <section class="monitores" in:fly={{ x: -200, duration: 200 }}>
    <MonitorDados />
    <MonitorMemoria />
    <RegistroNave />
  </section>
{/if}