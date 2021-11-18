import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot, useRecoilValue } from "recoil";
import { QuestionBox } from "./component/atom/QuestionBox";
import { readState } from "./component/hooks/quizState";
import { Upload } from "./Upload";

function App() {
  // const read_flag = useRecoilValue(readState);
  // console.log(read_flag);
  // JSONで一気にやってみたかったけど分けてステート管理するのを実装してみる
  const readInfo = useRecoilValue(readState);

  return (
    <div className="App">
      <ChakraProvider>
        <Upload>
          <button>Upload Files</button>
        </Upload>
        {readInfo.isRead ? <QuestionBox /> : null}
      </ChakraProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  rootElement
);
