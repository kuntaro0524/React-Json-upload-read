import React from "react";
import { Button } from "@chakra-ui/react";

export const MyButton = (props) => {
  const { children } = props;
  return <Button colorScheme="teal">{children}</Button>;
};
