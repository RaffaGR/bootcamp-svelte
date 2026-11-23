<!-- PEDRO (Slides 15 a 17 — Regras e Validações de Formulário no Svelte) -->
<script lang="ts">
  import { nave } from '../nave.svelte';

  let mensagem = $state('');

  function validarEDecolar(event: SubmitEvent) {
    event.preventDefault();
    const energiaTotal = nave.shields + nave.thrusters + nave.weapons;
    if (energiaTotal > 100) {
      nave.decolou = false;
      mensagem = 'Erro: reduza a energia para até 100%!';
      return;
    }
    nave.decolou = true;
    mensagem = 'Decolagem autorizada!';
  }
</script>

<article>
  <h2>3. REGRAS E VALIDAÇÃO <code>form</code></h2>
  <form onsubmit={validarEDecolar}>
    <label><span>Nave (3–20 letras):</span><input type="text" required minlength="3" maxlength="20" bind:value={nave.shipName} /></label>
    <label><span>E-mail do Piloto:</span><input type="email" required placeholder="piloto@frota.com" bind:value={nave.emailPiloto} /></label>
    <label><span>Tripulantes (1–6):</span><input type="number" required min="1" max="6" bind:value={nave.tripulantes} /></label>
    <button type="submit">VALIDAR E DECOLAR</button>
    {#if mensagem}<p>{mensagem}</p>{/if}
  </form>
</article>
