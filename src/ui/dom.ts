import { DrawResult, ButtonHandlers } from "../types";

export const updateFriendsList = (friends: string[]): void => {
  const list = document.getElementById("friendsList");
  const friendsHtml = friends.map((friend) => `<li>${friend}</li>`).join("");
  if (list) {
    list.innerHTML = friendsHtml;
  }
};

export const updateResultDisplay = (result: DrawResult[] | null): void => {
  const resultList = document.getElementById("result");
  const friendsList = document.getElementById("friendsList");

  if (!resultList || !friendsList) return;

  const displayStyle = result ? "none" : "block";
  const resultHtml = result
    ? result.map((pair) => `<li>${pair.giver} → ${pair.receiver}</li>`).join("")
    : "";

  friendsList.style.display = displayStyle;
  resultList.innerHTML = resultHtml;
};

export const updateDrawButton = (
  hasResult: boolean,
  handlers: ButtonHandlers
): void => {
  const button = document.querySelector(".button-draw");

  if (!button) return;

  const buttonText = hasResult ? "Recomeçar" : "Sortear amigo";
  const buttonHtml = `
    <img src="assets/play_circle_outline.png" 
         alt="Ícone ${hasResult ? "recomeçar" : "sortear"}" />
    ${buttonText}
  `;

  button.innerHTML = buttonHtml;
  (button as HTMLElement).onclick = hasResult
    ? handlers.restart
    : handlers.draw;
};
