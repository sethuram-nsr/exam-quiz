import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Container, Card, ListGroup, Button, Spinner, ProgressBar } from "react-bootstrap";
import "./CSS/Exam.css";

const shuffleOptions = (options) => options.sort(() => Math.random() - 0.5);

const ExamComponent = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const navigate = useNavigate(); // Define useNavigate only once

  useEffect(() => {
    fetch("https://the-trivia-api.com/v2/questions?limit=10")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const formattedQuestions = data.map((q) => ({
            question: q.question.text,
            options: shuffleOptions([...q.incorrectAnswers, q.correctAnswer]),
            correctAnswer: q.correctAnswer,
          }));
          setQuestions(formattedQuestions);
        } else {
          console.error("Invalid API response:", data);
        }
      })
      .catch((error) => console.error("Error fetching questions:", error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1); // Correct way to update state
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
      setTimeLeft(30);
    } else {
      navigate("/score", { state: { score, totalQuestions: questions.length } }); // Correct navigation path
    }
  };

  if (loading) {
    return (
      <Container fluid className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  return (
    <Container fluid className="exam-quiz d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow" style={{ width: "100%", maxWidth: "600px", minHeight: "450px" }}>
        <Card.Body className="d-flex flex-column">
          <h5 className="text-center">
            {currentQuestionIndex + 1} of {questions.length}
          </h5>
          <p className="text-center fw-bold" style={{ minHeight: "80px", fontSize: "18px" }}>
            {questions[currentQuestionIndex].question}
          </p>
          <ProgressBar now={(timeLeft / 30) * 100} variant="danger" className="mb-3" />
          <ListGroup className="w-100">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <ListGroup.Item
                key={index}
                className={`text-center ${selectedOption === option ? "active" : ""}`}
                onClick={() => handleOptionClick(option)}
                style={{ cursor: "pointer", fontSize: "16px", height: "50px" }}
              >
                {index + 1}. {option}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
        <div className="d-flex justify-content-center mt-3">
          {currentQuestionIndex === questions.length - 1 ? (
            <Button variant="success" onClick={handleNextQuestion} disabled={selectedOption === null}>
              Show Result
            </Button>
          ) : (
            <Button variant="primary" onClick={handleNextQuestion} disabled={selectedOption === null}>
              Next
            </Button>
          )}
        </div>
      </Card>
    </Container>
  );
};

export default ExamComponent;
