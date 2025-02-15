import { DrawResult, ButtonHandlers } from "../types";

export const updateFriendsList = (friends: string[]): void => {
  const list = document.getElementById("friendsList");
  if (!list) return;
  list.innerHTML = "";
  friends.forEach((friend) => {
    const newFriend = document.createElement("li");
    newFriend.textContent = friend;
    list.appendChild(newFriend);
  });
};

export const updateResultDisplay = (result: DrawResult[] | null): void => {
  const resultList = document.getElementById("result");
  const friendsList = document.getElementById("friendsList");
  const resultDisplay = result ? "none" : "block";

  if (!resultList || !friendsList) return;

  resultList.innerHTML = "";
  friendsList.style.display = resultDisplay;

  if (result) {
    result.forEach((pair) => {
      const resultItem = document.createElement("li");
      resultItem.textContent = `${pair.giver} → ${pair.receiver}`;
      resultList.appendChild(resultItem);
    });
  }
};

export const updateDrawButton = (
  hasResult: boolean,
  handlers: ButtonHandlers
): void => {
  const button = document.querySelector(".button-draw");
  if (!button) return;
  button.innerHTML = hasResult
    ? `<img src="assets/play_circle_outline.png" alt="Ícone recomeçar" />
       Recomeçar`
    : `<img src="assets/play_circle_outline.png" alt="Ícone sortear" />
       Sortear amigo`;
  (button as HTMLElement).onclick = hasResult
    ? handlers.restart
    : handlers.draw;
};
