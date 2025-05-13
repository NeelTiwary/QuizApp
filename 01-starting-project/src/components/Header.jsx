import React from 'react'
import logo from '../assets/quiz-logo.png'

function Header() {
  return (
    <header>
        <img src={logo} alt="Logo" />
        <h1>ReactQuiz</h1>
    </header>
  )
}

export default Header
