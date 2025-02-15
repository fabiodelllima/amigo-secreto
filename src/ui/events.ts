import { EventHandlers } from "../types";

export const setupEventListeners = ({ add, draw }: EventHandlers): void => {
  const addButton = document.getElementById("addButton");
  const drawButton = document.getElementById("drawButton");
  const friendInput = document.getElementById("friend") as HTMLInputElement;

  if (addButton) addButton.addEventListener("click", add);
  if (drawButton) drawButton.addEventListener("click", draw);

  if (friendInput) {
    friendInput.addEventListener("keypress", (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        add();
      }
    });
  }
};
