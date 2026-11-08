<!-- PATRICK (Slides 18 e 19 — Componente reutilizável de Botão com tag <button>, onclick e $props) -->
<script lang="ts">
  let { texto, cor = 'amber', aoClicar }: { texto: string; cor?: 'amber' | 'cyan'; aoClicar: () => void } = $props();
</script>

<button type="button" class={cor} onclick={aoClicar}>
  {texto}
</button>
