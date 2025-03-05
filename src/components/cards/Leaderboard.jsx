import React, { useState, useEffect } from "react";
import { Container, Card, Table, Spinner } from "react-bootstrap";
import { Layout, Typography, Button } from "antd"; // Import Ant Design components
import { Link } from "react-router-dom";
import "../CSS/Leader.css";

const { Header, Content } = Layout;

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call (replace with actual API)
    setTimeout(() => {
      setLeaderboardData([
        { rank: 1, name: "Alice", score: 95 },
        { rank: 2, name: "Bob", score: 90 },
        { rank: 3, name: "Charlie", score: 88 },
        { rank: 4, name: "David", score: 85 },
        { rank: 5, name: "Emma", score: 82 },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  return (<Layout 
    style={{  
      background: "linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4, #fbc2eb)", 
      width: "100vw",
      minHeight: "100vh"
    }} 
  >
  
      {/* Header Section */}
      <Header
        className="header-home"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#001529",
          padding: "10px 50px",
          width: "100%",
        }}
      >
        <Typography.Title level={3} >
          DIGITAL EXAM
        </Typography.Title>
        <Link to="/login">
          <Button className="leader-btn" type="primary">Login</Button>
        </Link>
      </Header>

      <Content className="leader-board" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexGrow: 1 }}>
        {/* Loading Spinner */}
        {loading ? (
          <Container className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
            <Spinner animation="border" variant="primary" />
          </Container>
        ) : (
          // Leaderboard Section
          <Container className="d-flex justify-content-center align-items-center" style={{paddingRight:"400px", height: "70vh" }}>
            <Card className="p-4 shadow" style={{ width: "100%", maxWidth: "600px" }}>
              <Card.Body>
                <h3 className="text-center">🏆 Leaderboard</h3>
                <Table striped bordered hover responsive className="mt-3">
                  <thead>
                    <tr>
                      <th>Rank</th>
                      <th>Name</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaderboardData.map((player) => (
                      <tr key={player.rank}>
                        <td>🏅 {player.rank}</td>
                        <td>{player.name}</td>
                        <td>{player.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Container>
        )}
      </Content>
    </Layout>
  );
};

export default Leaderboard;
