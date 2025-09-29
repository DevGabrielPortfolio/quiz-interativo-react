import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import QuestionCard from './components/QuestionCard';
import ScoreBoard from './components/ScoreBoard';
import { questions } from './data/questions';
import styles from './App.module.css';

function App() {
  
  // 1. Gerenciamento de Estado (useState)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizResults, setQuizResults] = useState([]); // Armazena {resposta, tempo, pontos...}
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0); // Timer da questão atual

  // Checagem de estado
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  // 2. Manipulação de Tempo e Estado (useEffect)
  useEffect(() => {
    // O timer deve iniciar em cada questão e reiniciar ao passar para a próxima.
    if (!isQuizFinished) {
      // Inicia o timer
      const timer = setInterval(() => {
        setTimeElapsed(prevTime => prevTime + 1);
      }, 1000);

      // Limpeza do efeito: interrompe o timer
      return () => clearInterval(timer);
    }
    // O timer é resetado (setTimeElapsed(0)) implicitamente na função handleAnswerSelect
  }, [currentQuestionIndex, isQuizFinished]); 

  // Função de seleção de resposta
  const handleAnswerSelect = (selectedOption) => {
    
    if (isQuizFinished) return;

    // Garante que só registra uma vez por questão
    if (quizResults.length === currentQuestionIndex) {

      const isCorrect = selectedOption === currentQuestion.answer;
      
      const result = {

        question: currentQuestion.question,
        selectedOption,
        correctAnswer: currentQuestion.answer,
        timeSpent: timeElapsed, // Tempo gasto para responder
        points: currentQuestion.points,
        isCorrect,

      };
      
      // Atualiza o estado
      setQuizResults(prevResults => [...prevResults, result]);

      // Avança para a próxima questão
      if (currentQuestionIndex < totalQuestions - 1) {

        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setTimeElapsed(0); // Reseta o timer para a nova questão

      } else {

        setIsQuizFinished(true); // Finaliza o quiz

      }

    }

  };

  const handleRestartQuiz = () => {

    setCurrentQuestionIndex(0);
    setQuizResults([]);
    setIsQuizFinished(false);
    setTimeElapsed(0);

  };

  return (

    <div className={styles.appContainer}>

      {!isQuizFinished && (

        <Header 

          currentQuestionIndex={currentQuestionIndex}
          totalQuestions={totalQuestions}
          timeElapsed={timeElapsed} 

        />

      )}
      
      <main className={styles.mainContent}>

        {!isQuizFinished && currentQuestion ? (

          // Componente QuestionCard: exibe a questão
          <QuestionCard

            question={currentQuestion}
            onSelectAnswer={handleAnswerSelect} // Passagem de Props

          />

        ) : (

          // Componente ScoreBoard: exibe o resultado final
          <ScoreBoard 

            results={quizResults} 
            onRestart={handleRestartQuiz}

          />

        )}

      </main>

    </div>

  );

}

export default App;
