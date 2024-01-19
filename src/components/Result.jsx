import React from 'react'
import QuestionBox from './QuestionBox'
import "./Result.css"

export default function Result({score,onRestart}) {
  const restartAction = () => {
    if (onRestart) {
      onRestart();
    }
  }
  return (
    <div>
      <div className="resultBox">
      <p>{score/20} out of 5 are correct({score}%)</p>
      <button onClick={restartAction}>RESTART</button>
      </div>
    </div>
  )
}
