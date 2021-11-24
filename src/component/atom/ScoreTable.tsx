import React, { memo } from "react";
import { ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

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

type Props = {
  n_question: number;
  n_corr: number;
  corr_ratio: number;
};

export const ScoreTable: VFC<Props> = memo((props) => {
  const { n_question, n_corr, corr_ratio } = props;
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
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td fontSize="20px" textAlign="center">
            {n_question}
          </Td>
          <Td fontSize="20px" textAlign="center">
            {n_corr}
          </Td>
          <Td fontSize="20px" textAlign="center" isNumeric>
            {corr_ratio}
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
});
