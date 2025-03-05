import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import {
  Container,
  Form,
  Button,
  Card,
  CardBody,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import "./CSS/Login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email.toLowerCase() === "sethuramsmart@gmail.com" && password === "1234") {
      localStorage.setItem("email", email);
      message.success("Login successful! Redirecting...");

      setTimeout(() => {
        navigate("/exam-instructions");
      }, 1000);
    } else {
      message.error("Invalid email or password. Please try again.");
    }
  };

  return (
    <Container className=" container  d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <Card
        style={{
          width: "90%",
          maxWidth: "400px",
          padding: "20px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
          borderRadius: "12px",
          background: "#ffffff",
        }}
      >
        <CardBody>
          <h2 className="text-center text-dark font-weight-bold">Login</h2>
          <Form onSubmit={handleLogin}>
            <FormGroup className="mb-3">
              <Label for="email" className="font-weight-bold">Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="Enter email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderRadius: "8px", boxShadow: "inset 0 2px 5px rgba(0,0,0,0.1)" }}
              />
            </FormGroup>
            <FormGroup className="mb-3">
              <Label for="password" className="font-weight-bold">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ borderRadius: "8px", boxShadow: "inset 0 2px 5px rgba(0,0,0,0.1)" }}
              />
            </FormGroup>
            <Button
              type="submit"
              color="primary"
              className="w-100 font-weight-bold"
              style={{ borderRadius: "8px", padding: "10px", fontSize: "16px" }}
            >
              Login
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Login;
