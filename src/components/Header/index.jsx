// src/components/Header/index.jsx
import React from 'react';
import styles from './Header.module.css';

// Recebe o índice, o total e o tempo restante por props
const Header = ({ currentQuestionIndex, totalQuestions, timeElapsed }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>React Mastery Quiz</h1>
      
      <div className={styles.info}>
        <span className={styles.questionCounter}>
          Questão {currentQuestionIndex + 1} / {totalQuestions}
        </span>
        <span className={styles.timer}>
          Tempo Gasto: <strong>{timeElapsed}s</strong>
        </span>
      </div>
    </header>
  );
};

export default Header;