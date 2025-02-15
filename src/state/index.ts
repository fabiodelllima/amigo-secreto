export const State = {
  friends: [],
  result: null,
  error: null,
};

export function addFriendToState(state, newFriend) {
  return {
    ...state,
    friends: [...state.friends, newFriend],
    error: null,
  };
}

export function updateDrawResult(state, result) {
  return {
    ...state,
    result: result.draw,
    error: result.error,
  };
}

export function clearState() {
  return {
    friends: [],
    result: null,
    error: null,
  };
}
