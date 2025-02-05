export const MINIMO_PARTICIPANTES = 6;
export const MAX_TENTATIVAS_SORTEIO = 100;
export const MENSAGENS = {
  ERRO_CAMPO_VAZIO: "Por favor, insira um nome.",
  ERRO_MINIMO_PARTICIPANTES: (total) =>
    `É necessário adicionar, no mínimo,  ${MINIMO_PARTICIPANTES} amigos para realizar o sorteio. Por enquanto, você adicionou apenas ${total}.`,
  ERRO_SORTEIO: `Não foi possível realizar o sorteio.\n
     Por favor, tente novamente.`,
  ERRO_NOME_DUPLICADO: "Este nome já foi adicionado!",
};
