import { validateNewFriend, validateDraw } from "./core/validators.js";
import { setupEventListeners } from "./ui/events.js";
import { generateDraw } from "./core/draw.js";
import {
  State,
  addFriendToState,
  updateDrawResult,
  clearState,
} from "./state/index.js";
import {
  updateFriendsList,
  updateResultDisplay,
  updateDrawButton,
} from "./ui/dom.js";

function addFriend() {
  const input = document.getElementById("friend");
  const name = input.value;

  const validation = validateNewFriend(name, State.friends);
  if (!validation.valid) {
    alert(validation.error);
    return;
  }

  const newState = addFriendToState(State, validation.name);
  Object.assign(State, newState);

  updateFriendsList(State.friends);
  input.value = "";
  input.focus();
}

function drawNames() {
  const validation = validateDraw(State.friends);
  if (!validation.valid) {
    alert(validation.error);
    return;
  }

  const result = generateDraw(State.friends);
  if (!result.success) {
    alert(result.error);
    return;
  }

  const newState = updateDrawResult(State, result);
  Object.assign(State, newState);

  updateResultDisplay(State.result);
  updateDrawButton(true, {
    restart: restartGame,
    draw: drawNames,
  });
}

function restartGame() {
  const newState = clearState();
  Object.assign(State, newState);

  const input = document.getElementById("friend");

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
