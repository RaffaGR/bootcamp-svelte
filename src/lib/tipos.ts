// LEANDRO (Slides 9 a 12 — Formato dos Dados com TypeScript)
export interface Nave {
  shipName: string;      // texto: nome da nave
  emailPiloto: string;   // texto: e-mail do piloto
  tripulantes: number;   // número: quantidade de tripulantes (1 a 6)
  shields: number;       // número: energia dos escudos (0 a 50)
  thrusters: number;     // número: propulsores / acelerador (0 a 50)
  weapons: number;       // número: energia das armas (0 a 50)
  warp: boolean;         // verdadeiro/falso: motor de dobra ligado?
  decolou: boolean;      // verdadeiro/falso: nave já decolou?
}
