import React, { useState } from 'react';
import QuizData from '../Data/QuizData';
import './Quiz.css';
import QuizResult from './QuizResult';

function Quiz() {
  const [currQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clicked, setClicked] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const changeQuestion = () => {
    updateScore();
    if (currQuestion < QuizData.length - 1) {
      setCurrentQuestion(currQuestion + 1);
      setClicked(0);
    }
    else {
      setShowResult(true)
    }

  }

  const updateScore = () => {
    if (clicked === QuizData[currQuestion].answer) {
      setScore(score + 1);
    }
  }

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClicked(0);
    setScore(0);
  }
  return (
    <div>
      <p className="heading-text">Quiz App</p>
      <div className="container">
        {showResult ? (
          <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
        ) : (
          <>
            <div className="question">
              <span id='question-number'>{currQuestion + 1}. </span>
              <span id='question-txt'>{QuizData[0].question}</span>


            </div>
            <div className="option-container">
              {QuizData[currQuestion].options.map((options, i) => {
                return (
                  <button className={`option-btn ${clicked == i + 1 ? "checked" : null
                    }`}
                    key={i} onClick={()=>setClicked(i + 1)}
                  >{options}</button>
                )
              })}
            </div>
            <input type='button' value="Next" id='next-btn' onClick={changeQuestion} />
          </>)}
      </div>
    </div>
  )

}

export default Quiz
