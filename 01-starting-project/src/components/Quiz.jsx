import React from "react";
import { useState, useCallback, useRef } from "react";
import questions from "../../questions";
import Summary from "./Summary";
import Question from "./Question";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizCompleted = activeQuestionIndex === questions.length;

  const handleAnswerClick = useCallback(
    function handleAnswerClick(answer) {
      setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
    },
    []
  );

  const handleSkipAnswer = useCallback(
    () => handleAnswerClick(null),
    [handleAnswerClick]
  );


  if (quizCompleted) {
    return <Summary userAnswers={userAnswers}/>
    
  }

  
  return (
    <div id="quiz">
      <Question
      key={activeQuestionIndex}
      index={activeQuestionIndex}
        onSelectAnswer={handleAnswerClick}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

export default Quiz;
