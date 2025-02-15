export function atualizarListaAmigos(amigos) {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const novoAmigo = document.createElement("li");
    novoAmigo.textContent = amigo;
    lista.appendChild(novoAmigo);
  });
}

export function atualizarResultadoNaTela(resultado) {
  const listaResultado = document.getElementById("resultado");
  const listaAmigos = document.getElementById("listaAmigos");

  listaResultado.innerHTML = "";

  if (resultado) {
    listaAmigos.style.display = "none";
    resultado.forEach((par) => {
      const itemResultado = document.createElement("li");
      itemResultado.textContent = `${par.quemEntrega} → ${par.quemRecebe}`;
      listaResultado.appendChild(itemResultado);
    });
  } else {
    listaAmigos.style.display = "block";
  }
}

export function atualizarBotaoSortear(temResultado, handlers) {
  const botao = document.querySelector(".button-draw");

  botao.innerHTML = temResultado
    ? `<img src="assets/play_circle_outline.png" alt="Ícone para sortear" />
           Recomeçar`
    : `<img src="assets/play_circle_outline.png" alt="Ícone para sortear" />
           Sortear amigo`;

  botao.onclick = temResultado ? handlers.recomecar : handlers.sortear;
}
