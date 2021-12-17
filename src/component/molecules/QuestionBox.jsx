import React, { useCallback, useState } from "react";
import { Box, Flex, Input, Stack, Text } from "@chakra-ui/react";
import { MyButton } from "../atom/MyButton";
import { useRecoilState, useRecoilValue } from "recoil";
import { answerState, quizState, readState } from "../hooks/quizState";

import { AnswerBox } from "../atom/AnswerBox";
import { useCycleNum } from "../hooks/useCycleNum";

export const QuestionBox = (props) => {
  // recoilを利用して quizState.js で設定したグローバル変数と関数へアクセス
  const [quizInfo, setQuizInfo] = useRecoilState(quizState);
  // JSONで一気にやってみたかったけど分けてステート管理するのを実装してみる
  const readInfo = useRecoilValue(readState);
  // recoilを利用して quizState.js で設定したグローバル変数と関数へアクセス
  const [answerInfo, setAnswerInfo] = useRecoilState(answerState);

  // Providerで定義したサイクル数のフックス
  const { ncycle, setCycle } = useCycleNum();

  const onChangeInput = useCallback((e) => {
    let userAnswer = e.target.value;
    setAnswerInfo({ ...answerInfo, inputAnswer: userAnswer });
  });
  // このときの問題文
  let current_question = quizInfo[answerInfo.currentIndex];
  // console.log(current_question);
  // console.log(readInfo.isRead);
  // console.log(answerInfo);

  const onClickCheckAnswer = () => {
    // この問題の答え
    let correctAnswer = current_question.Answer;
    console.log("CORRECT_ANSWER=" + correctAnswer);
    console.log("User_ANSWER=" + answerInfo.inputAnswer);

    // let nextIndex = answerInfo.currentIndex + 1;
    setAnswerInfo({
      isAnswered: true,
      currentIndex: answerInfo.currentIndex,
      isCorrect: correctAnswer === answerInfo.inputAnswer
    });
  };

  // 次のクイズボタンを押したらインデックスが変わる
  const onClickNextQuestion = useCallback((e) => {
    // 各設問に対する成績を埋めていくわけです
    console.log("NEXTQUESTION:" + current_question.ntry);
    console.log("NEXTQUESTION:" + current_question.ncorr);

    // この問題の成績を更新する
    const new_ntry = current_question.ntry + 1;
    let new_ncorr = current_question.ncorr;
    if (answerInfo.isCorrect) {
      new_ncorr = new_ncorr + 1;
    }
    const seiseki_obj = { ntry: new_ntry, ncorr: new_ncorr };

    console.log(seiseki_obj);

    quizInfo.splice(answerInfo.currentIndex, 1, seiseki_obj);

    console.log("NEXTQUESTION:" + quizInfo[answerInfo.currentIndex].ntry);

    // const targetQuestion = quizInfo.find((thisone) => thisone.id === id);

    // クイズのインデックスをインクリメント
    let nextIndex = answerInfo.currentIndex + 1;
    if (quizInfo.length === nextIndex) {
      nextIndex = 0;
      setCycle(ncycle + 1);
    }
    setAnswerInfo({
      isAnswered: false,
      currentIndex: nextIndex,
      inputAnswer: ""
    });
  });

  return (
    <div>
      <h1> {ncycle} </h1>
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
