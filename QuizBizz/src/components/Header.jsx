import { useState } from "react";

import Logo from "./Logo";

export default function Header() {
  const [active, setActive] = useState("Home");

  const navItems = ["Home", "Quizzes", "Score", "About"];

  return (
    <header className="bg-surface border-b border-border px-16 py-4 flex justify-between items-center">
      <h1 className="font-heading text-2xl text-primary flex items-center">
        <span className="text-text">Quiz</span>
        <Logo size={40} />
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
