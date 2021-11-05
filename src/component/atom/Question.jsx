import React from "react";

export const Question = (props) => {
  console.log(props);

  const { question } = props;
  return <p> {question} </p>;
};
