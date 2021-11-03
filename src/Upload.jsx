import React, { useState } from "react";

export function Upload({ children }) {
  const [quizes, setQuizes] = useState({});
  const [newses, setNewses] = useState([{ name: "Kunio Hirata" }]);

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      const jsons = JSON.parse(e.target.result);
      console.log("JSON=");
      console.log(jsons);
      console.log(typeof jsons);
      console.log("setQue");
      setQuizes(jsons);
      // console.log("Beautiful");
      // console.log(quizes);
    };
  };

  const onClickUnko = (e) => {
    setNewses([...newses, { name: "Ibuki Hirata" }]);
    console.log(newses);
  };
  return (
    <>
      <h1>Upload Json file - Example</h1>

      <input type="file" onChange={handleChange} />
      <br />
      {"uploaded file content -- " + quizes.JP}
      <button onClick={onClickUnko}> Unko </button>
    </>
  );
}
