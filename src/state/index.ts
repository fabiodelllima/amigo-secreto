import { AppState, DrawResponse } from "../types";

export const State: AppState = {
  friends: [],
  result: null,
  error: null,
};

export function addFriendToState(state: AppState, newFriend: string): AppState {
  return {
    ...state,
    friends: [...state.friends, newFriend],
    error: null,
  };
}

export function updateDrawResult(
  state: AppState,
  result: DrawResponse
): AppState {
  return {
    ...state,
    result: result.draw || null,
    error: result.error || null,
  };
}

export function clearState(): AppState {
  return {
    friends: [],
    result: null,
    error: null,
  };
}
