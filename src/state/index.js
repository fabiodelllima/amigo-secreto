export const Estado = {
  amigos: [],
  resultado: null,
  erro: null,
};

export function adicionarAmigoAoEstado(estado, novoAmigo) {
  return {
    ...estado,
    amigos: [...estado.amigos, novoAmigo],
    erro: null,
  };
}

export function atualizarResultadoSorteio(estado, resultado) {
  return {
    ...estado,
    resultado: resultado.sorteio,
    erro: resultado.erro,
  };
}

export function limparEstado() {
  return {
    amigos: [],
    resultado: null,
    erro: null,
  };
}
