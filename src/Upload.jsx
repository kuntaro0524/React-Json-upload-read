import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { quizState } from "./quizState";

export function Upload({ children }) {
  // recoilを利用して quizState.js で設定したグローバル変数と関数へアクセス
  const [quizInfo, setQuizInfo] = useRecoilState(quizState);

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      const jsons = JSON.parse(e.target.result);
      console.log("JSON=");
      console.log(typeof jsons);
      console.log(jsons);
      setQuizInfo(jsons);
    };
  };

  return (
    <>
      <h1> JSONをアップロードしましょう </h1>
      <input type="file" onChange={handleChange} />
      <br />
      {console.log("YANCHA")}

      {quizInfo.map((quiz) => (
        <h1 key={quiz.Question}>
          {" "}
          {quiz.Question} {quiz.Answer}
        </h1>
      ))}
    </>
  );
}
