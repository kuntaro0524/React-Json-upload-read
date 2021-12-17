import { atom } from "recoil";

import { Qjson } from "../atom/type/question";

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
  default: {
    isAnswered: false,
    currentIndex: 0,
    inputAnswer: "",
    isCorrect: false
  }
});
