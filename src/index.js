import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import "./styles.css";
import { Upload } from "./Upload";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Upload>
          <button>Upload Files</button>
        </Upload>
      </RecoilRoot>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
