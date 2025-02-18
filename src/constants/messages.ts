import { MIN_PARTICIPANTS } from "./config";

export const MESSAGES = {
  EMPTY_FIELD_ERROR: `
    Por favor, insira um nome.
  `,
  MIN_PARTICIPANTS_ERROR: (total: number): string => `
    É necessário adicionar, no mínimo, 
    ${MIN_PARTICIPANTS} amigos para realizar o sorteio. 
    Por enquanto, você adicionou apenas ${total}.
  `,
  DRAW_ERROR: `
    Não foi possível realizar o sorteio.\n
    Por favor, tente novamente.
  `,
  DUPLICATE_NAME_ERROR: `
    Este nome já foi adicionado!
  `,
  ODD_PARTICIPANTS_ERROR: `
    O número de participantes precisa ser 
    par para realizar o sorteio.
  `,
} as const;
