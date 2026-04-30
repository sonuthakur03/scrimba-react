import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Quizzes from "./Quizzes";
import Score from "./Score";
import About from "./About";

const Main = () => {
  return (
    <main className="bg-background min-h-screen px-16 py-8 text-text">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/score" element={<Score />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};

export default Main;
