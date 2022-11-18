import {useEffect, useState, useRef} from 'react';

function useWordGame(startingTime = 10) {

  const [timeRemaining, setTimeRemaining] = useState(startingTime)
  const [text, setText] = useState("")
  const [isTimeRanning, setIsTimeRanning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textBoxRef = useRef(null)

  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function calculateWordCount(text) {
    const wordArr = text.trim().split(" ")
    return wordArr.filter(word => word !== "").length
  }

  function startGame() {

    setIsTimeRanning(true)
    setTimeRemaining(startingTime)
    setText("")
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }

  function endGame() {
    setIsTimeRanning(false)
    setWordCount(calculateWordCount(text))
  }

  useEffect(() => {
    if(isTimeRanning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time -1)
      }, 1000);
    } else if(timeRemaining === 0) {
      endGame()
    }

  }, [isTimeRanning, timeRemaining])

  return {textBoxRef, text, handleChange, isTimeRanning, timeRemaining, startGame, wordCount}

}

export default useWordGame