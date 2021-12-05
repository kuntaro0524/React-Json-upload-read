import React from "react";
import { Box, Center, Flex } from "@chakra-ui/react";

import { ScoreTable } from "../atom/ScoreTable";
import { useRecoilValue } from "recoil";
import { readState } from "../hooks/quizState";
import { QuestionBox } from "../molecules/QuestionBox";
import { useCycleNum } from "../hooks/useCycleNum";
import { useResult } from "../hooks/useResult";

export const QuizLayout = () => {
  // const read_flag = useRecoilValue(readState);
  // console.log(read_flag);
  // JSONで一気にやってみたかったけど分けてステート管理するのを実装してみる
  const readInfo = useRecoilValue(readState);

  // サイクル数はContextのフックスを利用する
  // Providerで定義したサイクル数のフックス
  const { ncycle, setCycle } = useCycleNum();
  const { all_results, setResult} = useResult();

  return (
    <>
      <ScoreTable n_question={3} n_corr={10} corr_ratio={50.2} ncycle={ncycle}/>
      {readInfo.isRead ? <QuestionBox /> : null}
    </>
  );
};
