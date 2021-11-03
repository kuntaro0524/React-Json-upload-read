import React, { useState } from "react";

export function Upload({ children }) {
  const [quizes, setQuizes] = useState({ JP: { 0: "KUNIO" } });
  const [newses, setNewses] = useState({ name: "Kunio Hirata" });

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      const jsons = JSON.parse(e.target.result);
      console.log("JSON=");
      console.log(typeof jsons);
      console.log(jsons);
      setQuizes(jsons);
    };
  };

  const onClickUnko = (e) => {
    setNewses({ ...newses, name: "Ibuki Hirata" });
  };
  return (
    <>
      <h1>Upload Json file - Example</h1>

      <input type="file" onChange={handleChange} />
      <br />
      {console.log("YANCHA")}
      {console.log(quizes["JP"]["1"])}
      <button onClick={onClickUnko}> Unko </button>
      <p>{newses.name}</p>
    </>
  );
}
