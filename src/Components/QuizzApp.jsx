import React, { useState } from "react";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setSelectedOption(null); // Reset selected option
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  return (
    <div className="quiz">
      {showResults ? (
        <div className="results">
          <h2>Results</h2>
          <p>Your Score: {score}</p>
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="question">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="answers">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                className={
                  index === selectedOption ? "selected" : "option_button"
                }
                style={{
                  color: "black",
                  border: "1px solid black",
                }}
              >
                {option.text}
              </button>
            ))}
          </div>
          <button
            onClick={() =>
              handleAnswerClick(
                questions[currentQuestion].options[selectedOption].isCorrect
              )
            }
            disabled={selectedOption === null}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
