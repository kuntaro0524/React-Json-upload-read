import React from "react";
import { Box, Flex } from "@chakra-ui/react";

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

export const QuizLayout = () => {
  return (
    <>
      <Table variant="simple">
        <TableCaption>現状のまとめ</TableCaption>
        <Thead>
          <Tr>
            <Th>これまでの問題数</Th>
            <Th>これまでの正答数</Th>
            <Th isNumeric>これまでの正答率（％）</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>20</Td>
            <Td>10</Td>
            <Td isNumeric>50.0</Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
};
