import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot, useRecoilValue } from "recoil";
import { Question } from "./component/atom/Question";
import { readState } from "./quizState";
import "./styles.css";
import { Upload } from "./Upload";

function App() {
  // const read_flag = useRecoilValue(readState);
  // console.log(read_flag);

  return (
    <div className="App">
      <Upload>
        <button>Upload Files</button>
      </Upload>
      {/* {useRecoilValue(readState) ? <p>True</p> : <p>False</p>} */}
      {useRecoilValue(readState).isRead ? (
        <Question question="Is this your pen?" />
      ) : (
        <p> not read</p>
      )}
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
