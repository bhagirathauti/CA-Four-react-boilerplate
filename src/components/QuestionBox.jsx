import React, { useState,useEffect} from 'react'
import questions from '../questions'
import "./QuestionBox.css"
import Result from './Result'
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

export default function QuestionBox() {
  const [currIndex,setCurrIndex] = useState(0)
  const [currScore,setCurrScore] = useState(0)
  const [highLighted, setHighlighted] = useState(false);
  const [currentMode,setCurrentMode] = useState(false);
  const currQuestion = questions[currIndex];
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
    setCurrentMode(true)
  }
  const lightMode = () => {
    setCurrentMode(false)
  }
  return(
    <div className={`quiz-app ${currentMode ? 'darken' : ''}`}>
    <div>
      <div className={`navbar ${currentMode ? 'darken' : ''}`}>
        <h1>Kalvium</h1>
        <div className="lightNdark">
        <button className='light' onClick={lightMode}><MdLightMode /></button>
        <button className='dark' onClick={darkMode}> <MdDarkMode/> </button>
        </div>
    </div>
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
          <div className="highlightBtns">
            <button onClick={highlightText}>HIGHLIGHT</button>
            <button onClick={removeHighlight}>REMOVE HIGHLIGHT</button>
          </div>
          </div>
        ):(
          <>
          <div className={`resultPage ${currentMode ? 'darken' : ''}`}>
        <p><Result score={currScore} onRestart={handleRestart}/></p>
        </div>
        </>)
      }
    </div>
    </div>
  )
}
