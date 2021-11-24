import React from "react";
import { Box, Center, Flex } from "@chakra-ui/react";

import { ScoreTable } from "../atom/ScoreTable";
import { useRecoilValue } from "recoil";
import { readState } from "../hooks/quizState";
import { QuestionBox } from "../atom/QuestionBox";

export const QuizLayout = () => {
  // const read_flag = useRecoilValue(readState);
  // console.log(read_flag);
  // JSONで一気にやってみたかったけど分けてステート管理するのを実装してみる
  const readInfo = useRecoilValue(readState);

  return (
    <>
      <ScoreTable n_question={3} n_corr={10} corr_ratio={50.2} />
      {readInfo.isRead ? <QuestionBox /> : null}
    </>
  );
};
