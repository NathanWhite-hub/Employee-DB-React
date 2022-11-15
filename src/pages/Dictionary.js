import { useState, useEffect } from "react";

function Dictionary() {
  const [word, setWord] = useState("");

  useEffect(() => {
    console.log("State Updated ", word);
  }, [word]);

  return (
    <>
      <h2>Search for the definition:</h2>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
    </>
  );
}

export default Dictionary;
