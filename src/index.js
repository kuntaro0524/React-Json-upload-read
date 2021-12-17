import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot, useRecoilValue } from "recoil";
import { QuestionBox } from "./component/molecules/QuestionBox";

import { QuizLayout } from "./component/layout/QuizLayout";
import { CycleIndexProvider } from "./component/providers/CycleIndexProvider";
import { Upload } from "./Upload";
import { AllResultsProvider } from "./component/providers/ResultsProvider";

function App() {
  return (
    <div className="App">
      <CycleIndexProvider>
        <AllResultsProvider>
          <ChakraProvider>
            <Upload>
              <button>Upload Files</button>
            </Upload>
            <QuizLayout />
          </ChakraProvider>
        </AllResultsProvider>
      </CycleIndexProvider>
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
