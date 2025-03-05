import React, { useState, useEffect } from "react";
import "../CSS/Practice.css";
import { Card } from "antd";

const PracticeTest = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  // Fetch trivia questions using async/await
  const fetchQuestions = async () => {
    try {
      const response = await fetch("https://the-trivia-api.com/v2/questions");
      const data = await response.json();

      const formattedData = data.map((q) => ({
        question: q.question.text,
        correctAnswer: q.correctAnswer,
        options: [...q.incorrectAnswers, q.correctAnswer].sort(() => Math.random() - 0.5),
      }));

      setQuestions(formattedData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching trivia questions:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);

    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setSelectedAnswer(null);
      } else {
        alert(`Quiz finished! Your score: ${score + (answer === questions[currentQuestionIndex].correctAnswer ? 1 : 0)}/${questions.length}`);
        setCurrentQuestionIndex(0);
        setScore(0);
      }
    }, 1000);
  };

  if (loading) return <p>Loading questions...</p>;

  return (
    <Card style={{ textAlign: "center", padding: "20px" }}className="practice-test">
      {/* <h2>Trivia Game</h2> */}
      <h3 className="qution">{questions[currentQuestionIndex].question}</h3>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(option)}
            style={{
              margin: "10px",
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: selectedAnswer
                ? option === questions[currentQuestionIndex].correctAnswer
                  ? "green"
                  : option === selectedAnswer
                  ? "red"
                  : "#ccc"
                : "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              minWidth: "200px",
            }}
            disabled={!!selectedAnswer}
          >
            {option}
          </button>
        ))}
      </div>
      <p>Score: {score}</p>
    </Card>
  );
};

export default PracticeTest;
