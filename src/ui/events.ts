import { EventHandlers } from "../types";

const createKeyPressHandler =
  (add: () => void) =>
  (event: KeyboardEvent): void => {
    if (event.key === "Enter") {
      add();
    }
  };

export const setupEventListeners = ({ add, draw }: EventHandlers): void => {
  const addButton = document.getElementById("addButton")!;
  const drawButton = document.getElementById("drawButton")!;
  const friendInput = document.getElementById("friend") as HTMLInputElement;
  const keyPressHandler = createKeyPressHandler(add);

  addButton.addEventListener("click", add);
  drawButton.addEventListener("click", draw);
  friendInput.addEventListener("keypress", keyPressHandler);
};
