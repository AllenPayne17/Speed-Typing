import React from 'react';
import './App.css';
import useWordGame from './hooks/useWordGame';

function App() {  

  const {
      textBoxRef, 
      text, 
      handleChange, 
      isTimeRanning, 
      timeRemaining, 
      startGame, 
      wordCount
  } = useWordGame()

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textBoxRef}
        value={text}
        onChange={handleChange}
        disabled={!isTimeRanning}
      />
      <h4>time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRanning}>Start</button>
      <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;
