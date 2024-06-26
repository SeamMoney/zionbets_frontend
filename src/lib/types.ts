export const SOCKET_EVENTS = {
  START_ROUND: "start-round",
  SET_BET: "set-bet",
  CASH_OUT: "cash-out",
  BET_CONFIRMED: "bet-confirmed",
  CASH_OUT_CONFIRMED: "cash-out-confirmed",
  ROUND_RESULT: "round-result",
  ROUND_START: "round-start",
  CHAT_MESSAGE: "chat-message",
  CHAT_NOTIFICATION: "chat-notification",
};

export type BetData = {
  roundId: number;
  playerEmail: string;
  betAmount: number;
  coinType: string;
};

export type CashOutData = {
  roundId: number;
  playerEmail: string;
  cashOutMultiplier: number;
};

export type RoundStart = {
  roundId: number;
  startTime: number;
  crashPoint: number;
};

export type ChatMessage = {
  authorEmail: string;
  authorUsername: string;
  message: string;
};
