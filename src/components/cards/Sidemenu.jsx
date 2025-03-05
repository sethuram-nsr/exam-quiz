import { Drawer, List, Typography } from "antd";
import { Link } from "react-router-dom";
import { 
  BookOutlined, 
  PlayCircleOutlined, 
  TrophyOutlined, 
  BarChartOutlined, 
  ReadOutlined, 
  CustomerServiceOutlined 
} from "@ant-design/icons";

const menuItems = [
  { to: "/exam-instructions", icon: <BookOutlined />, label: "Instructions" },
  { to: "/exam", icon: <PlayCircleOutlined />, label: "Start Exam" },
  { to: "/score", icon: <TrophyOutlined />, label: "Results" },
  { to: "/leaderboard", icon: <BarChartOutlined />, label: "Leaderboard" },
  { to: "/practice", icon: <ReadOutlined />, label: "Practice Tests" },
  { to: "/support", icon: <CustomerServiceOutlined />, label: "Support" },
];

const SidebarMenu = ({ drawerVisible, setDrawerVisible }) => (
  <Drawer
    title="📌 Quick Menu"
    placement="left"
    closable
    onClose={() => setDrawerVisible(false)}
    visible={drawerVisible}
    bodyStyle={{ padding: 0 }}
  >
    <List
      dataSource={menuItems}
      renderItem={({ to, icon, label }) => (
        <List.Item
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "500",
            transition: "0.3s",
          }}
        >
          <Link 
            to={to} 
            onClick={() => setDrawerVisible(false)}
            style={{ display: "flex", alignItems: "center", gap: "10px", width: "100%" }}
          >
            {icon}
            <Typography.Text strong>{label}</Typography.Text>
          </Link>
        </List.Item>
      )}
    />
  </Drawer>
);

export default SidebarMenu;
