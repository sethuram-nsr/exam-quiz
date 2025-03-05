import React from "react";
import { Card, Button } from "antd";
// import "./CSS/Support.css";
import "../CSS/Support.css";

const Support = () => {
  return (
    <div className="support-page">
      <h1>Support Page</h1>
      <Card title="Need Help?" className="support-card">
        <p>Contact our support team for assistance.</p>
        <Button type="primary" className="support-btn">Contact Support</Button>
      </Card>
    </div>
  );
};

export default Support;
