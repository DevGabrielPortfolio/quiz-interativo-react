// src/components/ScoreBoard/index.jsx
import React from 'react';
import styles from './ScoreBoard.module.css';

// Recebe os resultados e a função de reinício por props
const ScoreBoard = ({ results, onRestart }) => {
  // Cálculo do Resumo
  const totalQuestions = results.length;
  const totalCorrect = results.filter(r => r.selectedOption === r.correctAnswer).length;
  const totalScore = results
    .filter(r => r.selectedOption === r.correctAnswer)
    .reduce((sum, r) => sum + r.points, 0);
  const totalTime = results.reduce((sum, r) => sum + r.timeSpent, 0);
  const percentCorrect = ((totalCorrect / totalQuestions) * 100).toFixed(1);
  const minTime = results.length > 0 ? Math.min(...results.map(r => r.timeSpent)) : 0;

  return (
    <div className={styles.scoreBoard}>
      <h2 className={styles.title}>🎉 Quiz Finalizado!</h2>
      
      {/* Resumo no Topo */}
      <div className={styles.summary}>
        <div className={styles.summaryItem}>Pontuação Total: <strong className={styles.highlightScore}>{totalScore} pts</strong></div>
        <div className={styles.summaryItem}>Acertos: <strong>{totalCorrect} / {totalQuestions} ({percentCorrect}%)</strong></div>
        <div className={styles.summaryItem}>Menor Tempo: <strong>{minTime}s</strong></div>
        <div className={styles.summaryItem}>Tempo Total: <strong>{totalTime}s</strong></div>
      </div>

      <button className={styles.restartButton} onClick={onRestart}>
        Reiniciar Quiz
      </button>

      {/* Detalhes por Questão */}
      <h3 className={styles.detailsHeader}>Detalhes de Resposta</h3>
      <ul className={styles.detailsList}>
        {results.map((result, index) => {
          const isCorrect = result.selectedOption === result.correctAnswer;
          const cardClass = isCorrect ? styles.correct : styles.incorrect;

          return (
            <li key={index} className={`${styles.detailCard} ${cardClass}`}>
              <h4>Q{index + 1}: {result.question}</h4>
              <p>Sua Resposta: <strong>{result.selectedOption}</strong></p>
              <p>Resposta Correta: <strong>{result.correctAnswer}</strong></p>
              <p>Pontuação: <strong>{isCorrect ? result.points : 0} pts</strong></p>
              <p>Tempo Gasto: <strong>{result.timeSpent}s</strong></p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ScoreBoard;