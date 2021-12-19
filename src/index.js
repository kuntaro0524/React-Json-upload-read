import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot, useRecoilValue } from "recoil";
import { QuestionBox } from "./component/molecules/QuestionBox";

import { QuizLayout } from "./component/layout/QuizLayout";
import { CycleIndexProvider } from "./component/providers/CycleIndexProvider";
import { Upload } from "./Upload";
import {
  NtrialContext,
  NtrialProvider
} from "./component/providers/NumTrialProvider";
import { NcorrProvider } from "./component/providers/NumCorrProvider";

function App() {
  return (
    <div className="App">
      <CycleIndexProvider>
        <NtrialProvider>
          <NcorrProvider>
            <ChakraProvider>
              <Upload>
                <button>Upload Files</button>
              </Upload>
              <QuizLayout />
            </ChakraProvider>
          </NcorrProvider>
        </NtrialProvider>
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
