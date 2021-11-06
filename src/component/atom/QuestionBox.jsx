import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { MyButton } from "./MyButton";

export const QuestionBox = (props) => {
  const { quizIndex, quizBody } = props;
  console.log(quizIndex);

  return (
    <div>
      <Box bg="green"> {quizBody} </Box>
      <MyButton> Push me </MyButton>
    </div>
  );
};
