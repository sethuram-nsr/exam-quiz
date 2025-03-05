import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

const ScoreComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Retrieve score & total questions from state or fallback to 0
  const { score = 0, totalQuestions = 0 } = location.state || {};

  return (
    <Container fluid className="exam-quiz d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 shadow text-center" style={{ width: "500px", minHeight: "300px" }}>
        <Card.Body>
          <h3>Quiz Finished!</h3>
          <h4>Your Score: {score} / {totalQuestions}</h4>
          <Button variant="success" onClick={() => navigate("/")}>Restart Quiz</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ScoreComponent;
