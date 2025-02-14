export function configurarEventos(handlers) {
  document.getElementById("amigo").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handlers.adicionar();
    }
  });
}
