import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { answerState, quizState, readState } from "../../quizState";
import { QuestionBox } from "./QuestionBox";

export const Question = (props) => {
  // recoilを利用して quizState.js で設定したグローバル変数と関数へアクセス
  const [quizInfo, setQuizInfo] = useRecoilState(quizState);
  // JSONで一気にやってみたかったけど分けてステート管理するのを実装してみる
  const readInfo = useRecoilValue(readState);
  // recoilを利用して quizState.js で設定したグローバル変数と関数へアクセス
  const [answerInfo, setAnswerInfo] = useRecoilState(answerState);

  const { question } = props;

  return (
    <div>
      {quizInfo.map((quiz, index) => (
        <QuestionBox key={index} quizIndex={index} quizBody={quiz.Question} />
        // <h1 key={quiz.Question}>{quiz.Question}</h1>
      ))}
    </div>
  );
};
