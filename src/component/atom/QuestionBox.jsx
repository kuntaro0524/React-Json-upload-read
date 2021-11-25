import React, { useCallback } from "react";
import { Box, Flex, Input, Stack, Text } from "@chakra-ui/react";
import { MyButton } from "./MyButton";
import { useRecoilState, useRecoilValue } from "recoil";
import { answerState, quizState, readState } from "../hooks/quizState";

import { AnswerBox } from "../atom/AnswerBox";

export const QuestionBox = (props) => {
  // recoilを利用して quizState.js で設定したグローバル変数と関数へアクセス
  const [quizInfo, setQuizInfo] = useRecoilState(quizState);
  // JSONで一気にやってみたかったけど分けてステート管理するのを実装してみる
  const readInfo = useRecoilValue(readState);
  // recoilを利用して quizState.js で設定したグローバル変数と関数へアクセス
  const [answerInfo, setAnswerInfo] = useRecoilState(answerState);

  const onChangeInput = useCallback((e) => {
    let userAnswer = e.target.value;
    setAnswerInfo({ ...answerInfo, inputAnswer: userAnswer });
  });
  // このときの問題文
  let current_question = quizInfo[answerInfo.currentIndex];
  console.log(current_question);
  console.log(readInfo.isRead);
  console.log(answerInfo);

  const onClickCheckAnswer = () => {
    // この問題の答え
    let correctAnswer = current_question.Answer;
    console.log("CORRECT_ANSWER=" + correctAnswer);
    console.log("User_ANSWER=" + answerInfo.inputAnswer);

    console.log(correctAnswer === answerInfo.inputAnswer);

    // let nextIndex = answerInfo.currentIndex + 1;
    setAnswerInfo({ isAnswered: true, currentIndex: answerInfo.currentIndex });
  };

  // 次のクイズボタンを押したらインデックスが変わる
  const onClickNextQuestion = useCallback((e) => {
    // クイズのインデックスをインクリメント
    let nextIndex = answerInfo.currentIndex + 1;
    if (quizInfo.length === nextIndex) nextIndex = 0;
    setAnswerInfo({
      isAnswered: false,
      currentIndex: nextIndex,
      inputAnswer: ""
    });
  });

  return (
    <div>
      <Flex bg="darkgreen.100" size="400px" w="800px">
        <Box>
          <Stack spacing={3}>
            <Text fontSize="3xl"> {current_question.Question} </Text>
            <Input
              value={answerInfo.inputAnswer}
              fontSize="3xl"
              placeholder="ここに答えを書く"
              onChange={onChangeInput}
            />
            <AnswerBox
              answer={current_question.Answer}
              isAnswered={answerInfo.isAnswered}
            />
            <Flex>
              <Box>
                <MyButton onClick={onClickCheckAnswer} colorScheme="teal">
                  Check the answer
                </MyButton>
                <MyButton onClick={onClickNextQuestion}>
                  Next question.
                </MyButton>
              </Box>
            </Flex>
          </Stack>
        </Box>
      </Flex>
    </div>
  );
};
