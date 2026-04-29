import { useState } from "react";
import { LuBrain } from "react-icons/lu";

export default function Header() {
  const [active, setActive] = useState("Home");

  const navItems = ["Home", "Quizzes", "Score", "About"];

  return (
    <header className="bg-surface border-b border-border px-16 py-4 flex justify-between items-center">
      <h1 className="font-heading text-2xl text-primary">
        <svg width="0" height="0">
          <linearGradient id="half-and-half" x1="0%" y1="0%" x2="0%" y2="100%">
            {/* Top 50% White */}
            <stop stopColor="white" offset="50%" />
            {/* Bottom 50% primary */}
            <stop stopColor="#6366F1" offset="50%" />
          </linearGradient>
        </svg>
        <span className="text-text">Quiz</span>
        <LuBrain
          stroke="url(#half-and-half)"
          size={40}
          style={{
            display: "inline",
            filter: "drop-shadow(0px 0px 1px rgba(0,0,0,0.5)",
          }}
        />
        Bizz
      </h1>

      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li
            key={item}
            onClick={() => setActive(item)}
            className={`nav-item ${active === item ? "nav-item-active" : ""}`}
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="flex-center gap-4">
        <button className=" text-text font-semibold py-2 px-8 border border-border rounded-md">
          Sign In
        </button>
        <button className="bg-primary text-text font-semibold py-2 px-8 border border-border rounded-md">
          Sign Up
        </button>
      </div>
    </header>
  );
}
