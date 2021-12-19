import React, { memo } from "react";
import { ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";
import { useCycleNum } from "../hooks/useCycleNum";
import { useResult } from "../hooks/useResult";
import { useNcorr } from "../hooks/useNcorr";
import { useNtry } from "../hooks/useNtrial";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption
} from "@chakra-ui/react";
import { useRecoilTransactionObserver_UNSTABLE } from "recoil";

type Props = {
  n_question: number;
  n_corr: number;
  corr_ratio: number;
  ncycle: number;
};

export const ScoreTable: VFC<Props> = memo(() => {
  // サイクル数はContextのフックスを利用する
  // Providerで定義したサイクル数のフックス
  const { ncycle, setCycle } = useCycleNum();
  const { all_result, setResult } = useResult();
  const { ncorr_total, setNcorrTotal } = useNcorr();
  const { ntrial_total, setNtrialTotal } = useNtry();

  let correct_ratio = ((ncorr_total / ntrial_total) * 100.0).toFixed(2.0);

  // const { n_question, n_corr, corr_ratio, ncycle } = props;
  return (
    <Table size="md" variant="simple" colorScheme="black">
      <TableCaption>現状のまとめ</TableCaption>
      <Thead>
        <Tr>
          <Th textAlign="center">これまでの問題数</Th>
          <Th textAlign="center">これまでの正答数</Th>
          <Th textAlign="center" isNumeric>
            これまでの正答率（％）
          </Th>
          <Th textAlign="center">　現在のサイクル数</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td fontSize="20px" textAlign="center">
            {ntrial_total}
          </Td>
          <Td fontSize="20px" textAlign="center">
            {ncorr_total}
          </Td>
          <Td fontSize="20px" textAlign="center" isNumeric>
            {correct_ratio}
          </Td>
          <Td fontSize="20px" textAlign="center" isNumeric>
            {ncycle}
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
});
