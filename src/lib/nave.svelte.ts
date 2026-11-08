// MATHEUS (Slides 13 e 14 — Memória / Estado Reativo com $state)
import type { Nave } from './tipos';

export const nave = $state<Nave>({
  shipName: 'SS Svelte-V',
  emailPiloto: '',
  tripulantes: 1,
  shields: 30,
  thrusters: 25,
  weapons: 15,
  warp: false,
  decolou: false
});
