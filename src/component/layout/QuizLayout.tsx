import React from "react";
import { Box, Center, Flex } from "@chakra-ui/react";

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
              20
            </Td>
            <Td fontSize="20px" textAlign="center">
              10
            </Td>
            <Td fontSize="20px" textAlign="center" isNumeric>
              50.0
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </>
  );
};
