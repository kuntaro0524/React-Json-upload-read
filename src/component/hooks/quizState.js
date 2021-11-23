import { atom } from "recoil";

export const quizState = atom({
  key: "quizState",
  default: []
});

export const readState = atom({
  key: "readState",
  default: { isRead: false }
});

export const answerState = atom({
  key: "answerState",
  default: { isAnswered: false, currentIndex: 0, inputAnswer: "" }
});