import React from 'react'
import quizCompletedImg from "../assets/quiz-complete.png";
import questions from '../../questions';

function Summary({userAnswers}) {
  // const quizCompleted = activeQuestionIndex === questions.length;
    const skippedAnswers = userAnswers.filter(answer => answer === null);
    const correctAnswers = userAnswers.filter((answer, index) => answer === questions[index].answers[0]);
    const incorrectAnswers = userAnswers.filter((answer, index) => answer !== questions[index].answers[0] && answer !== null);
    return (
      <div id="summary">
        <img src={quizCompletedImg} alt="Quiz Completed" />
        <h2>Quiz Completed!</h2>
        <div id="summary-stats">
          <p>
            <span className='number'>{((skippedAnswers.length / userAnswers.length) * 100).toFixed(2)}%</span>
            <span className='text'>Skipped</span>
          </p>
          <p>
            <span className='number'>{((correctAnswers.length / userAnswers.length) * 100).toFixed(2)}%</span>
            <span className='text'>Answered Correctly</span>
          </p>
          <p>
            <span className='number'>{((incorrectAnswers.length / userAnswers.length) * 100).toFixed(2)}%</span>
            <span className='text'>Incorrect answers</span>
          </p>
        </div>
        <ol>
          {userAnswers.map((userAnswer, index) => {

            let cssClass = 'user-answer';

            if(userAnswer === null){
              cssClass += ' skipped';
            }else if(userAnswer === questions[index].answers[0]){
              cssClass += ' correct';
            }else{
              cssClass += ' wrong';
            }

            return (
              <li key={index}>
                <h3>
                  {index + 1}
                </h3>
                <p className='question text'>
                  {questions[index].question}
                </p>
                <p className={cssClass}>
                  {userAnswer ?? 'Skipped'}
                </p>
              </li>
            )
          })}

        </ol>
      </div>
  )
}

export default Summary
