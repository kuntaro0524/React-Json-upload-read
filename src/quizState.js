import { atom } from "recoil";

export const quizState = atom({
  key: "quizState",
  default: []
});

export const readState = atom({
  key: "readState",
  default: { isRead: false }
});
