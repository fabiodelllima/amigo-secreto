import { validateNewFriend, validateDraw } from "./core/validators";
import { setupEventListeners } from "./ui/events";
import { generateDraw } from "./core/draw";
import {
  State,
  addFriendToState,
  updateDrawResult,
  clearState,
} from "./state/index";
import {
  updateFriendsList,
  updateResultDisplay,
  updateDrawButton,
} from "./ui/dom";

declare global {
  interface Window {
    addFriend: () => void;
    drawNames: () => void;
    restartGame: () => void;
  }
}

function addFriend(): void {
  const input = document.getElementById("friend") as HTMLInputElement;
  const name = input.value;
  const validation = validateNewFriend(name, State.friends);
  const newState = validation.valid
    ? addFriendToState(State, validation.name!)
    : State;

  if (!validation.valid) {
    alert(validation.error);
    return;
  }

  Object.assign(State, newState);
  updateFriendsList(State.friends);
  input.value = "";
  input.focus();
}

function drawNames(): void {
  const validation = validateDraw(State.friends);
  const result = validation.valid ? generateDraw(State.friends) : null;
  const newState = result?.success ? updateDrawResult(State, result) : State;

  if (!validation.valid) {
    alert(validation.error);
    return;
  }

  if (!result?.success) {
    alert(result?.error);
    return;
  }

  Object.assign(State, newState);
  updateResultDisplay(State.result);
  updateDrawButton(true, {
    restart: restartGame,
    draw: drawNames,
  });
}

function restartGame(): void {
  const input = document.getElementById("friend") as HTMLInputElement;
  const newState = clearState();

  Object.assign(State, newState);
  updateFriendsList(State.friends);
  updateResultDisplay(null);
  updateDrawButton(false, {
    restart: restartGame,
    draw: drawNames,
  });

  input.value = "";
  input.focus();
}

window.addFriend = addFriend;
window.drawNames = drawNames;
window.restartGame = restartGame;

document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners({
    add: addFriend,
    draw: drawNames,
  });
});
