// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import NoteCreationPage from "./pages/NoteCreationPage.jsx";
import NoteEditPage from "./pages/NoteEditPage.jsx";
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<NoteCreationPage />} />
          <Route path="/edit/:id" element={<NoteEditPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
