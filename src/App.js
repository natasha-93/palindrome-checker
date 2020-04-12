import React, { useState } from "react";

function palindrome(string) {
  const re = /[^A-Za-z0-9]/g;
  const lowerCase = string.toLowerCase().replace(re, "");
  const reverseString = lowerCase.split("").reverse("").join("");
  return string === reverseString;
}

function App() {
  const [word, setWord] = useState("");
  return (
    <div>
      <input
        value={word}
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      {word.length > 0 && (
        <p>{palindrome(word) ? "is a palindrome!" : "is not a palindrome!"}</p>
      )}
    </div>
  );
}

export default App;
