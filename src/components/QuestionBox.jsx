import React, { useState,useEffect} from 'react'
import questions from '../questions'
import "./QuestionBox.css"

export default function QuestionBox() {
  const [currIndex,setCurrIndex] = useState(0)
  const [currScore,setCurrScore] = useState(0)
  const currQuestion = questions[currIndex];
  useEffect(() => {
    localStorage.setItem('quizScore', JSON.stringify(currScore));
  }, [currScore]);
  const buttonClick =() =>{
    if (currQuestion.options.some(option => option.isCorrect == true)) {
      setCurrScore(lastScore => lastScore + 10);
      setCurrIndex(lastIndex => lastIndex+1);
    }
    else{
      setCurrIndex(lastIndex => lastIndex+1);
    }
  }
  return(
    <div>
      <div className="navbar">
        <h1>Kalvium</h1>
        <button>LIGHT</button>
    </div>
      {
        currQuestion ? (
          <div className='QuestionsBox'>
          <h6>Question {currIndex+1} of 5</h6>
          <h2>{currQuestion.text}</h2>
          <div className="options">
            <button onClick={buttonClick}>A. {currQuestion.options[0].text}</button>
            <button onClick={buttonClick}>B. {currQuestion.options[1].text}</button>
            <button onClick={buttonClick}>C. {currQuestion.options[2].text}</button>
            <button onClick={buttonClick}>D. {currQuestion.options[3].text}</button>
          </div>
          </div>
        ):(<p>No More Questions</p>)
      }
    </div>
  )
}
