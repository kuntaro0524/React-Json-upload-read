import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { MyButton } from "./MyButton";

export const QuestionBox = (props) => {
  const { quizIndex, quizBody } = props;
  console.log(quizIndex);

  return (
    <div>
      <Flex bg="tomato" size="400px" w="800px">
        <Box>
          <Text fontSize="3xl">{quizBody}</Text>
          <MyButton> Correct? </MyButton>
          <MyButton> Show answer </MyButton>
        </Box>
      </Flex>
    </div>
  );
};
