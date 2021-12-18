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
  console.log("今の問題番号：" + answerInfo.currentIndex);

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
    // この問題の成績を更新する
    const new_ntry = current_question.ntry + 1;
    let new_ncorr = current_question.ncorr;
    if (answerInfo.isCorrect) {
      new_ncorr = new_ncorr + 1;
    }
    const new_obj = {
      Question: current_question.Question,
      Answer: current_question.Answer,
      ntry: new_ntry,
      ncorr: new_ncorr
    };
    let copy_quizes = [...quizInfo];

    copy_quizes.splice(answerInfo.currentIndex, 1, new_obj);
    setQuizInfo(copy_quizes);

    console.log("Updated num:" + new_ntry + ", " + new_ncorr);

    // クイズのインデックスをインクリメント
    let nextIndex = answerInfo.currentIndex + 1;
    if (quizInfo.length === nextIndex) {
      console.log("next index is reset to 0.");

      nextIndex = 0;
      setCycle(ncycle + 1);
    }
    setAnswerInfo({
      isAnswered: false,
      currentIndex: nextIndex,
      inputAnswer: "",
      isCorrect: false
    });
    console.log("end of the push");
  });

  return (
    <div>
      <h1>
        {" "}
        この問題の過去の正答率{" "}
        {((current_question.ncorr / current_question.ntry) * 100.0).toFixed(1)}%
      </h1>
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
