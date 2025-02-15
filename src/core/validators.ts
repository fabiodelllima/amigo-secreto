import { MIN_PARTICIPANTS } from "../constants/config";
import { MESSAGES } from "../constants/messages";
import { ValidationResult } from "../types";

export const validateNewFriend = (
  name: string,
  currentFriends: string[]
): ValidationResult => {
  const processedName = name.trim();
  const nameExists = currentFriends.includes(processedName);

  if (processedName === "") {
    return {
      valid: false,
      error: MESSAGES.EMPTY_FIELD_ERROR,
    };
  }

  return nameExists
    ? { valid: false, error: MESSAGES.DUPLICATE_NAME_ERROR }
    : { valid: true, name: processedName, error: null };
};

export const validateDraw = (friends: string[]): ValidationResult => {
  const totalParticipants = friends.length;
  const hasMinimumParticipants = totalParticipants >= MIN_PARTICIPANTS;
  const hasEvenParticipants = totalParticipants % 2 === 0;

  if (!hasMinimumParticipants) {
    return {
      valid: false,
      error: MESSAGES.MIN_PARTICIPANTS_ERROR(totalParticipants),
    };
  }

  return hasEvenParticipants
    ? { valid: true, error: null }
    : { valid: false, error: MESSAGES.ODD_PARTICIPANTS_ERROR };
};
