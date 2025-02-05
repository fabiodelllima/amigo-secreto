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

function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  const listaAmigos = document.getElementById("listaAmigos");
  const botao = document.querySelector(".button-draw");
  let tentativas;
  let sorteioValido;
  let sorteio;
  let amigosRecebedores;
  let quemEntrega;
  let possiveisRecebedores;
  let indexReceber;
  let quemRecebe;

  if (amigos.length < MINIMO_PARTICIPANTES) {
    alert(MENSAGENS.ERRO_MINIMO_PARTICIPANTES(amigos.length));
    return;
  }

  if (amigos.length % 2 !== 0) {
    alert(MENSAGENS.ERRO_QUANTIDADE_IMPAR);
    return;
  }

  resultado.innerHTML = "";
  tentativas = 0;
  sorteioValido = false;
  sorteio = [];

  while (!sorteioValido && tentativas < MAX_TENTATIVAS_SORTEIO) {
    amigosRecebedores = [...amigos];
    sorteio = [];
    sorteioValido = true;

    for (let i = 0; i < amigos.length; i++) {
      quemEntrega = amigos[i];

      possiveisRecebedores = amigosRecebedores.filter(
        (amigo) => amigo !== quemEntrega
      );

      if (possiveisRecebedores.length === 0) {
        sorteioValido = false;
        break;
      }

      indexReceber = Math.floor(Math.random() * possiveisRecebedores.length);
      quemRecebe = possiveisRecebedores[indexReceber];

      amigosRecebedores = amigosRecebedores.filter(
        (amigo) => amigo !== quemRecebe
      );

      sorteio.push({ quemEntrega, quemRecebe });
    }

    tentativas++;
  }

  if (!sorteioValido) {
    alert(MENSAGENS.ERRO_SORTEIO);
    return;
  }

  listaAmigos.style.display = "none";

  sorteio.forEach((par) => {
    const itemResultado = document.createElement("li");
    itemResultado.textContent = `${par.quemEntrega} → ${par.quemRecebe}`;
    resultado.appendChild(itemResultado);
  });

  botao.innerHTML = `
        <img src="assets/play_circle_outline.png" alt="Ícone para sortear" />
        Recomeçar
    `;
  botao.onclick = recomecarJogo;
}

