import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Instruction from "./components/Instruction";
import ExamPage from "./components/Exam";
import ScoreComponent from "./components/Showmark";
import Leaderboard from "./components/cards/Leaderboard";
import PracticeTest from "./components/cards/PracticeTest"; // ✅ Fixed Import
import Support from "./components/cards/Support";


const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("email");
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route path="/exam-instructions" element={<ProtectedRoute><Instruction /></ProtectedRoute>} />
        <Route path="/exam" element={<ProtectedRoute><ExamPage /></ProtectedRoute>} />
        <Route path="/score" element={<ProtectedRoute><ScoreComponent /></ProtectedRoute>} />
        <Route path="/leaderboard" element={<ProtectedRoute><Leaderboard /></ProtectedRoute>} />
        <Route path="/practiceTest" element={<ProtectedRoute><PracticeTest /></ProtectedRoute>} />
        <Route path="/support" element={<ProtectedRoute><Support /></ProtectedRoute>}/>

 {/* ✅ Fixed component usage */}

        {/* Catch-all Route (Redirect unknown routes to Home) */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
