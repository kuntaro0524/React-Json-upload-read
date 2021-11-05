import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { quizState, readState } from "./quizState";

export function Upload({ children }) {
  // recoilを利用して quizState.js で設定したグローバル変数と関数へアクセス
  const [quizInfo, setQuizInfo] = useRecoilState(quizState);
  // JSONで一気にやってみたかったけど分けてステート管理するのを実装してみる
  const [readInfo, setReadInfo] = useRecoilState(readState);

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      const jsons = JSON.parse(e.target.result);
      console.log("JSON=");
      console.log(typeof jsons);
      console.log(jsons);
      setQuizInfo(jsons);
      setReadInfo({ isRead: true });
    };
  };

  return (
    <>
      <h1> JSONをアップロードしましょう </h1>
      <input type="file" onChange={handleChange} />
      <br />
      {console.log("YANCHA")}

      {quizInfo.map((quiz) => (
        <h1 key={quiz.Question}>{quiz.Question}</h1>
      ))}
    </>
  );
}
