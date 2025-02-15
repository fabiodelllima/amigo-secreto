import { MAX_DRAW_ATTEMPTS } from "../constants/config";
import { MESSAGES } from "../constants/messages";
import { DrawResponse, DrawResult } from "../types";

const generateFriendPair = (
  giver: string,
  possibleReceivers: string[]
): DrawResult => {
  const receiverIndex = Math.floor(Math.random() * possibleReceivers.length);
  const receiver = possibleReceivers[receiverIndex];
  return { giver, receiver };
};

export const generateDraw = (friends: string[]): DrawResponse => {
  let attempts = 0;

  while (attempts < MAX_DRAW_ATTEMPTS) {
    const result = friends.reduce<DrawResult[]>((pairs, giver) => {
      const usedReceivers = pairs.map((pair) => pair.receiver);
      const possibleReceivers = friends.filter(
        (friend) => !usedReceivers.includes(friend) && friend !== giver
      );

      if (possibleReceivers.length === 0) return [];
      return [...pairs, generateFriendPair(giver, possibleReceivers)];
    }, []);

    if (result.length === friends.length) {
      return {
        success: true,
        draw: result,
      };
    }

    attempts++;
  }

  return {
    success: false,
    error: MESSAGES.DRAW_ERROR,
  };
};
