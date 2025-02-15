import { MAX_DRAW_ATTEMPTS } from "../constants/config.js";
import { MESSAGES } from "../constants/messages.js";

function generateFriendPair(giver, possibleReceivers) {
  const receiverIndex = Math.floor(Math.random() * possibleReceivers.length);
  const receiver = possibleReceivers[receiverIndex];
  return {
    giver,
    receiver,
    remainingPossibleReceivers: possibleReceivers.filter(
      (friend) => friend !== receiver
    ),
  };
}

export function generateDraw(friends) {
  let attempts = 0;

  while (attempts < MAX_DRAW_ATTEMPTS) {
    const result = friends.reduce(
      (acc, giver) => {
        if (acc.failure) return acc;

        const possibleReceivers = friends.filter(
          (friend) => !acc.alreadyReceiving.includes(friend) && friend !== giver
        );

        if (possibleReceivers.length === 0) {
          return { ...acc, failure: true };
        }

        const pair = generateFriendPair(giver, possibleReceivers);

        return {
          pairs: [
            ...acc.pairs,
            {
              giver: pair.giver,
              receiver: pair.receiver,
            },
          ],
          alreadyReceiving: [...acc.alreadyReceiving, pair.receiver],
          failure: false,
        };
      },
      {
        pairs: [],
        alreadyReceiving: [],
        failure: false,
      }
    );

    if (!result.failure) {
      return {
        success: true,
        draw: result.pairs,
      };
    }

    attempts++;
  }

  return {
    success: false,
    error: MESSAGES.DRAW_ERROR,
  };
}
