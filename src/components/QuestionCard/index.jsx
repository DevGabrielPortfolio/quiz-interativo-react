import React from 'react';
import styles from './QuestionCard.module.css';
import { getOptionLetter } from '../../data/questions';

// Recebe a questão atual e o manipulador de resposta por props
const QuestionCard = ({ question, onSelectAnswer }) => {

  return (

    <div className={styles.card}>

      <p className={styles.questionText}>

        {question.question}

      </p>

      <div className={styles.optionsContainer}>

        {question.options.map((option, index) => (

          <button

            key={index}
            className={styles.optionButton}
            onClick={() => onSelectAnswer(option)}

          >

            <span className={styles.optionLetter}>

              {getOptionLetter(index)}

            </span>

            {option}

          </button>

        ))}

      </div>

    </div>

  );

};

export default QuestionCard;