import React, { useState } from "react";
import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import questions from "../../questions";

function Question({
  index,
  onSelectAnswer,
  onSkipAnswer,
}) {
    const [answer , setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null,
    })

    let timer = 10000;

    if(answer.selectedAnswer){
        timer = 1000;
    }

    if(answer.isCorrect !== null){
        timer = 2000;
    }

    function handleAnswerClick(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null,
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: questions[index].answers[0] === answer,
            });

            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000);
        }, 1000);
    }

    let answerState = '';

    if(answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    }else if(answer.selectedAnswer) {
        answerState = 'answered';
    }


  return (
    <div id="question">
      <QuestionTimer key={timer} time={timer} onTimeOut={answer.selectedAnswer === '' ? onSkipAnswer : undefined} mode={answerState} />
      <h2>{questions[index].question}</h2>
      <Answers
        answers={questions[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleAnswerClick}
      />
    </div>
  );
}

export default Question;
