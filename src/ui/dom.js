export function updateFriendsList(friends) {
  const list = document.getElementById("friendsList");
  list.innerHTML = "";
  friends.forEach((friend) => {
    const newFriend = document.createElement("li");
    newFriend.textContent = friend;
    list.appendChild(newFriend);
  });
}

export function updateResultDisplay(result) {
  const resultList = document.getElementById("result");
  const friendsList = document.getElementById("friendsList");
  resultList.innerHTML = "";
  if (result) {
    friendsList.style.display = "none";
    result.forEach((pair) => {
      const resultItem = document.createElement("li");
      resultItem.textContent = `${pair.giver} → ${pair.receiver}`;
      resultList.appendChild(resultItem);
    });
  } else {
    friendsList.style.display = "block";
  }
}

export function updateDrawButton(hasResult, handlers) {
  const button = document.querySelector(".button-draw");
  button.innerHTML = hasResult
    ? `<img src="assets/play_circle_outline.png" alt="Draw icon" />
       Start Over`
    : `<img src="assets/play_circle_outline.png" alt="Draw icon" />
       Draw Names`;
  button.onclick = hasResult ? handlers.restart : handlers.draw;
}
