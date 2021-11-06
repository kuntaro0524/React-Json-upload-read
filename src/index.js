import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { Question } from "./component/atom/Question";
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
      <Question question="Is this your pen, really?" />
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
