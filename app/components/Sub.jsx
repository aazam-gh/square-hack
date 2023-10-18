'use client'

import { useState } from "react";
import { snacks } from "../appwrite";

export default function Sub() {
  let ress = ""

  const sen = snacks.documents.map(snack => ress = ress + snack.name)

  const [response, setResponse] = useState("");
  const [inputValue, setInputValue] = useState("");


  const reqBody = {
    snacknames : ress,
    input : inputValue
  }
  const handleClick = async () => {
    const res = await fetch("/api/handler", {
      method: "POST",
      body: JSON.stringify(reqBody),
    });
    const data = await res.json();
    setResponse(data);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" placeholder="type your anser" value={inputValue} onChange={handleInputChange}/>
      <button onClick={handleClick}>Make API Call</button>
      <p>Response: {response}</p>
    </div>
  );
}
