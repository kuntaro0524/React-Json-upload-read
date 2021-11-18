import React from "react";
import { Button } from "@chakra-ui/react";

export const MyButton = (props) => {
  const { children, onClick } = props;
  return (
    <Button colorScheme="teal" onClick={onClick}>
      {children}
    </Button>
  );
};
