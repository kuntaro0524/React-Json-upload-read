import React from "react";
import { ReactNode, VFC } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  colorScheme: string;
};

export const MyButton: VFC<Props> = (props) => {
  const { children, onClick, colorScheme } = props;
  return (
    <Button colorScheme={colorScheme} onClick={onClick}>
      {children}
    </Button>
  );
};
