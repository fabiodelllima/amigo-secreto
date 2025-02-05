import {
  MINIMO_PARTICIPANTES,
  MAX_TENTATIVAS_SORTEIO,
  MENSAGENS,
} from "./constants.js";

let amigos = [];

function atualizarListaAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const novoAmigo = document.createElement("li");
    novoAmigo.textContent = amigo;
    lista.appendChild(novoAmigo);
  });
}

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert(MENSAGENS.ERRO_CAMPO_VAZIO);
    return;
  }

  if (amigos.includes(nome)) {
    alert(MENSAGENS.ERRO_NOME_DUPLICADO);
    return;
  }

  amigos.push(nome);
  atualizarListaAmigos();
  input.value = "";
  input.focus();
}
