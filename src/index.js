import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot, useRecoilValue } from "recoil";
import { QuestionBox } from "./component/atom/QuestionBox";

import { QuizLayout } from "./component/layout/QuizLayout";
import { Upload } from "./Upload";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <Upload>
          <button>Upload Files</button>
        </Upload>
        <QuizLayout />
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
