import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { answerState, quizState, readState } from "../hooks/quizState";
import { QuestionBox } from "./QuestionBox";

export const Question = (props) => {
  return (
    <div>
      {quizInfo.map((quiz, index) => (
        <QuestionBox key={index} />
        // <h1 key={quiz.Question}>{quiz.Question}</h1>
      ))}
    </div>
  );
};
