import { MIN_PARTICIPANTS } from "../constants/config.js";
import { MESSAGES } from "../constants/messages.js";

export function validateNewFriend(name, currentFriends) {
  const processedName = name.trim();
  if (processedName === "") {
    return {
      valid: false,
      error: MESSAGES.EMPTY_FIELD_ERROR,
    };
  }
  if (currentFriends.includes(processedName)) {
    return {
      valid: false,
      error: MESSAGES.DUPLICATE_NAME_ERROR,
    };
  }
  return {
    valid: true,
    name: processedName,
    error: null,
  };
}

export function validateDraw(friends) {
  if (friends.length < MIN_PARTICIPANTS) {
    return {
      valid: false,
      error: MESSAGES.MIN_PARTICIPANTS_ERROR(friends.length),
    };
  }
  if (friends.length % 2 !== 0) {
    return {
      valid: false,
      error: MESSAGES.ODD_COUNT_ERROR,
    };
  }
  return {
    valid: true,
    error: null,
  };
}
