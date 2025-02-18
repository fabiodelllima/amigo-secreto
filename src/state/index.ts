import { AppState, DrawResponse } from "../types";

export const State: AppState = {
  friends: [],
  result: null,
  error: null,
};

export const addFriendToState = (
  state: AppState,
  newFriend: string
): AppState => ({
  ...state,
  friends: [...state.friends, newFriend],
  error: null,
});

export const updateDrawResult = (
  state: AppState,
  result: DrawResponse
): AppState => ({
  ...state,
  result: result.draw || null,
  error: result.error || null,
});

export const clearState = (): AppState => ({
  friends: [],
  result: null,
  error: null,
});
