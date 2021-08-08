import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "💫": "Dizzy",
  "💥": "Collision",
  "🦧": "Orangutan",
  "🦍": "Gorilla",
  "🦝": "Raccoon",
  "🦄": "Unicorn",
  "🦏": "Rhinoceros",
  "🦛": "Hippopotamus",
  "🦔": "Hedgehog",
  "🐧": "Penguin"
};

var emojisWeKnow = Object.keys(emojiDictionary);

const App = () => {
  const [meaning, setMeaning] = useState("");

  const handleEmojiInput = (userInput) => {
    var meaningInDictionary = emojiDictionary[userInput];

    if (meaningInDictionary === undefined) {
      meaningInDictionary = "We don't have this in our database.";
    }
    setMeaning(meaningInDictionary);
  };
  const emojiClicked = (emoji) => {
    setMeaning(emojiDictionary[emoji]);
  };
  return (
    <div className="App">
      <h3>Find name of your Emoji!</h3>
      <input
        className="input"
        type="text"
        onChange={(e) => handleEmojiInput(e.target.value)}
      />
      <h2>{meaning}</h2>

      <div>
        <h1>Emojis We Know in Database!</h1>
        {emojisWeKnow.map((emoji) => {
          return (
            <span
              key={emoji}
              onClick={() => emojiClicked(emoji)}
              style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default App;
