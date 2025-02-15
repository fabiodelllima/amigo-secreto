export const setupEventListeners = ({ add, draw }) => {
  document.getElementById("addButton").addEventListener("click", add);
  document.getElementById("drawButton").addEventListener("click", draw);
  document.getElementById("friend").addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      add();
    }
  });
};
