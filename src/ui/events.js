export function setupEventListeners(handlers) {
  document.getElementById("addButton").addEventListener("click", handlers.add);

  document
    .getElementById("drawButton")
    .addEventListener("click", handlers.draw);

  document.getElementById("friend").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      handlers.add();
    }
  });
}
