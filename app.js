import {
  Estado,
  adicionarAmigoAoEstado,
  atualizarResultadoSorteio,
  limparEstado,
} from "./state/index.js";
import { validarNovoAmigo, validarSorteio } from "./core/validators.js";
import { gerarSorteio } from "./core/sorteio.js";
import {
  atualizarListaAmigos,
  atualizarResultadoNaTela,
  atualizarBotaoSortear,
} from "./ui/dom.js";
import { configurarEventos } from "./ui/events.js";

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value;

  const validacao = validarNovoAmigo(nome, Estado.amigos);

  if (!validacao.valido) {
    alert(validacao.erro);
    return;
  }

  const novoEstado = adicionarAmigoAoEstado(Estado, validacao.nome);
  Object.assign(Estado, novoEstado);

  atualizarListaAmigos(Estado.amigos);
  input.value = "";
  input.focus();
}

function sortearAmigo() {
  const validacao = validarSorteio(Estado.amigos);

  if (!validacao.valido) {
    alert(validacao.erro);
    return;
  }

  const resultado = gerarSorteio(Estado.amigos);

  if (!resultado.sucesso) {
    alert(resultado.erro);
    return;
  }

  const novoEstado = atualizarResultadoSorteio(Estado, resultado);
  Object.assign(Estado, novoEstado);

  atualizarResultadoNaTela(Estado.resultado);
  atualizarBotaoSortear(true, {
    recomecar: recomecarJogo,
    sortear: sortearAmigo,
  });
}

function recomecarJogo() {
  const novoEstado = limparEstado();
  Object.assign(Estado, novoEstado);

  const input = document.getElementById("amigo");
  atualizarListaAmigos(Estado.amigos);
  atualizarResultadoNaTela(null);
  atualizarBotaoSortear(false, {
    recomecar: recomecarJogo,
    sortear: sortearAmigo,
  });
  input.value = "";
  input.focus();
}

window.adicionarAmigo = adicionarAmigo;
window.sortearAmigo = sortearAmigo;
window.recomecarJogo = recomecarJogo;

document.addEventListener("DOMContentLoaded", () => {
  configurarEventos({ adicionar: adicionarAmigo });
});
