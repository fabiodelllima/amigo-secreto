import { MINIMO_PARTICIPANTES, MENSAGENS } from "../constants/messages.js";

export function validarNovoAmigo(nome, amigosAtuais) {
  const nomeProcessado = nome.trim();

  if (nomeProcessado === "") {
    return {
      valido: false,
      erro: MENSAGENS.ERRO_CAMPO_VAZIO,
    };
  }

  if (amigosAtuais.includes(nomeProcessado)) {
    return {
      valido: false,
      erro: MENSAGENS.ERRO_NOME_DUPLICADO,
    };
  }

  return {
    valido: true,
    nome: nomeProcessado,
    erro: null,
  };
}

export function validarSorteio(amigos) {
  if (amigos.length < MINIMO_PARTICIPANTES) {
    return {
      valido: false,
      erro: MENSAGENS.ERRO_MINIMO_PARTICIPANTES(amigos.length),
    };
  }

  if (amigos.length % 2 !== 0) {
    return {
      valido: false,
      erro: MENSAGENS.ERRO_QUANTIDADE_IMPAR,
    };
  }

  return {
    valido: true,
    erro: null,
  };
}
