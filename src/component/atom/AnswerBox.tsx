import React from "react";
import { Box } from "@chakra-ui/react";

type Props = {
  answer: string;
};

export const AnswerBox = (props: Props) => {
  const { answer } = props;
  return (
    <Box fontSize="2xl" bg="yellow.50" color="black" w={800}>
      {answer}
    </Box>
  );
};
