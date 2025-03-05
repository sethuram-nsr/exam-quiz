import React from "react";
import { useNavigate } from "react-router-dom";
import "./CSS/Instruction.css"

const Instruction = () => {
  const navigate = useNavigate();

  const handleStartExam = () => {
    navigate("/exam"); // Redirect to the Exam page
  };

  return (
    <div className="instruction-exam ">
      <h1 className="text-3xl font-bold text-center text-gray-800">Online Exam Instructions</h1>
      
      <section className="mt-4">
        <h2 className="text-xl font-semibold text-gray-700">Before You Begin:</h2>
        <ul className="list-disc list-inside ml-4 text-gray-600">
          <li><i className="fas fa-wifi text-blue-500"></i> Ensure you have a <strong>stable internet connection</strong>.</li>
          <li><i className="fas fa-laptop text-blue-500"></i> Use a <strong>compatible device</strong> (Laptop, Desktop, or Tablet).</li>
          <li><i className="fas fa-times-circle text-blue-500"></i> Close all <strong>unnecessary applications and browser tabs</strong>.</li>
          <li><i className="fas fa-bell-slash text-blue-500"></i> <strong>Disable notifications</strong> to avoid interruptions.</li>
          <li><i className="fas fa-id-card text-blue-500"></i> Keep your <strong>ID card</strong> ready if required.</li>
        </ul>
      </section>
      
      <section className="mt-4">
        <h2 className="text-xl font-semibold text-gray-700">Exam Rules:</h2>
        <ul className="list-disc list-inside ml-4 text-gray-600">
          <li><i className="fas fa-clock text-red-500"></i> <strong>Time Limit:</strong> The exam is <strong>timed</strong> and cannot be paused.</li>
          <li><i className="fas fa-redo text-red-500"></i> <strong>Single Attempt Only:</strong> You can only attempt the exam <strong>once</strong>.</li>
          <li><i className="fas fa-book text-red-500"></i> <strong>No External Help:</strong> Books, notes, and external websites are <strong>not permitted</strong>.</li>
          <li><i className="fas fa-exclamation-triangle text-red-500"></i> <strong>No Switching Tabs:</strong> Navigating away may be flagged as suspicious activity.</li>
        </ul>
      </section>

      <div className="text-center mt-6">
        <button 
          className="px-6 py-3 bg-green-600 text-white text-lg font-bold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          onClick={handleStartExam} // Redirect to Exam
        >
          Start Exam
        </button>
      </div>
    </div>
  );
};

export default Instruction;

/* Instruction.css */

