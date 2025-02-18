export interface AppState {
  friends: string[];
  result: DrawResult[] | null;
  error: string | null;
}

export interface DrawResult {
  giver: string;
  receiver: string;
}

export interface DrawResponse {
  success: boolean;
  draw?: DrawResult[];
  error?: string;
}

export interface ValidationResult {
  valid: boolean;
  error?: string | null;
  name?: string;
}

export interface EventHandlers {
  add: () => void;
  draw: () => void;
}

export interface ButtonHandlers {
  restart: () => void;
  draw: () => void;
}
