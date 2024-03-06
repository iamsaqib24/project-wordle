import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length !== 5) {
      window.alert("Please enter exactly 5 characters!");
      return;
    }

    console.log({ guess });

    setGuess("");
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default GuessInput;
