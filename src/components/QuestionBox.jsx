// importing required data
import React, { useState,useEffect} from 'react'
import questions from '../questions'
import "./QuestionBox.css"
import Result from './Result'

export default function QuestionBox() {
  // Using use state hooks
  const [currIndex,setCurrIndex] = useState(0)
  const [currScore,setCurrScore] = useState(0)
  const [highLighted, setHighlighted] = useState(false);
  const [currentMode,setCurrentMode] = useState(false);
  const [currText,setCurrText] = useState("Dark Mode")
  const currQuestion = questions[currIndex];

  // Creating functions for buttons and handling state
  const buttonClick = (selectedOption) => {
    if (selectedOption.isCorrect) {
      setCurrScore((lastScore) => lastScore + 20);
    }
  
    setCurrIndex((lastIndex) => lastIndex + 1);
    setHighlighted(false);
  };
  const highlightText = () => {
    setHighlighted(true);
  };
  const removeHighlight = () => {
    setHighlighted(false);
  };
  const handleRestart = () => {
    setCurrIndex(0);
    setCurrScore(0);
  };
  const darkMode = () =>{
    if(currentMode==false){
      setCurrentMode(true)
      setCurrText("Light Mode")
    }
    else{
      setCurrentMode(false)
      setCurrText("Dark Mode")
    }
  }
  return(
    <div className={`quiz-app ${currentMode ? 'darken' : ''}`}>
    <div>
      {/* Navbar */}
      <div className={`navbar ${currentMode ? 'darken' : ''}`}>
        <h1>Kalvium</h1>
        <div className="lightNdark">
        <button className='dark' onClick={darkMode}>{currText} </button>
        </div>
    </div>
    {/* Questions and Options */ }
      {
        currQuestion ? (
          <div className={`QuestionsBox ${currentMode ? 'darken' : ''}`}>
          <h6>Question {currIndex+1} of 5</h6>
          <h2 className={`question ${highLighted ? 'highlighted' : ''}`}>{currQuestion.text}</h2>
          <div className={`options ${currentMode ? 'darken' : ''}`}>
          {currQuestion.options.map((option, index) => (
           <button className={`optBtn ${currentMode ? 'darken' : ''}`} key={option.id} onClick={() => buttonClick(option)}>
          {['A', 'B', 'C', 'D'][index]}. {option.text}
           </button>
          ))}
          </div>
          {/* Highlight Buttons */}
          <div className="highlightBtns">
            <button onClick={highlightText}>HIGHLIGHT</button>
            <button onClick={removeHighlight}>REMOVE HIGHLIGHT</button>
          </div>
          </div>
        ):(
          // Calling Result Component
          <>
          <div className={`resultPage ${currentMode ? 'darken' : ''}`}>
        <Result score={currScore} onRestart={handleRestart}/>
        </div>
        </>)
      }
    </div>
    </div>
  )
}
