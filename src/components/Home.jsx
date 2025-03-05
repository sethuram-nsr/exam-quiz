import React, { useState } from "react";
import { Layout, Typography, Button, Card, Row, Col } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import "./CSS/Home.css";
import SidebarMenu from "./cards/Sidemenu";

const { Header, Content } = Layout;

// Reusable Header Component
const CustomHeader = ({ setDrawerVisible }) => {
  return (
    <Header
      className="header-home"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#001529",
        padding: "10px 20px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Menu Icon for Mobile */}
      <Button
        type="text"
        icon={<MenuOutlined style={{ color: "#fff", fontSize: "22px" }} />}
        onClick={() => setDrawerVisible(true)}
        style={{ marginRight: "10px" }}
      />

      {/* Title Centered */}
      <Typography.Title
        level={3}
        style={{
          color: "#fff",
          margin: 0,
          textAlign: "center",
          flex: 1,
          fontSize: "20px",
          letterSpacing: "1px",
        }}
      >
        DIGITAL EXAM
      </Typography.Title>

      {/* Login Button */}
      <Link to="/login">
        <Button className="log-btn"
          type="primary"
          style={{
            background: "linear-gradient(45deg, #ff512f, #dd2476)",
            border: "none",
            borderRadius: "20px",
            padding: "8px 20px",
            fontWeight: "bold",
            transition: "all 0.3s ease-in-out",
          }}
        >
          Login
        </Button>
      </Link>
    </Header>
  );
};

const Home = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <Layout style={{ width: "100%", minHeight: "100vh" }}>
      {/* Custom Header */}
      <CustomHeader setDrawerVisible={setDrawerVisible} />

      {/* Sidebar Menu */}
      <SidebarMenu drawerVisible={drawerVisible} setDrawerVisible={setDrawerVisible} />

      <Content className="content-home" style={{ textAlign: "center", padding: "50px" }}>
        <Typography.Title className="heading-tit">Welcome to Digital Exam</Typography.Title>
        <Typography.Paragraph>
          Get started with your exams by exploring our features.
        </Typography.Paragraph>

        {/* Exam Features */}
        <Row gutter={[16, 16]} justify="center">
          {[
            {
              title: "Instructions",
              description: "Read the exam instructions carefully before starting.",
              link: "/exam-instructions",
              buttonText: "View Instructions",
            },
            {
              title: "Start Exam",
              description: "Take the exam and test your knowledge.",
              link: "/exam",
              buttonText: "Start Now",
            },
            {
              title: "Results",
              description: "Check your past scores and track progress.",
              link: "/score",
              buttonText: "View Results",
            },
            {
              title: "Leaderboard",
              description: "See top scorers and compare your performance.",
              link: "/leaderboard",
              buttonText: "View Leaderboard",
            },
            {
              title: "Practice Tests",
              description: "Enhance your skills with unlimited practice tests.",
              link: "/practiceTest",
              buttonText: "Start Practice",
            },
            {
              title: "Support",
              description: "Need help? Contact our support team for assistance.",
              link: "/support",
              buttonText: "Get Support",
            },
          ].map((item, index) => (
            <Col key={index} xs={24} sm={12} md={8}>
              <Card title={item.title} bordered={false} style={{ textAlign: "center", padding: "20px" }}>
                <p>{item.description}</p>
                <Link to={item.link}>
                  <Button className="btn" type="primary" size="large">
                    {item.buttonText}
                  </Button>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default Home;
