let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const lista = document.getElementById("listaAmigos");
  const novoAmigo = document.createElement("li");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome);
  novoAmigo.textContent = nome;
  lista.appendChild(novoAmigo);
  input.value = "";
  input.focus();
}
