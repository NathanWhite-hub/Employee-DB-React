import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dictionary() {
  const [word, setWord] = useState("");
  const navigate = useNavigate();

  return (
    <>
      <h2>Search for the definition:</h2>
      <input
        type="text"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button
        onClick={() => {
          navigate("/definition/" + word, { replace: true });
        }}
      >
        Search
      </button>
    </>
  );
}

export default Dictionary;
