export function configurarEventos(handlers) {
  document
    .getElementById("btnAdicionar")
    .addEventListener("click", handlers.adicionar);

  document
    .getElementById("btnSortear")
    .addEventListener("click", handlers.sortear);

  document.getElementById("amigo").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handlers.adicionar();
    }
  });
}
