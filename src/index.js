import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { Upload } from "./Upload";

function App() {
  return (
    <div className="App">
      <Upload>
        <button>Upload Files</button>
      </Upload>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
