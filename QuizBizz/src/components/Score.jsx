import React from "react";
import { LuRotateCcw, LuHouse } from "react-icons/lu";
import { Link } from "react-router-dom";

const Score = () => {
  return (
    <section className="max-h-screen bg-background flex items-center justify-center p-10">
      {/* 🌟 BIGGER CONTAINER */}
      <div className="bg-surface border border-border rounded-2xl w-full max-w-7xl p-10 shadow-[0_0_25px_rgba(99,102,241,0.25)]">
        <h1 className="text-3xl font-bold text-text mb-8">
          Quiz Results Dashboard
        </h1>

        {/* 🧩 GRID ROW LAYOUT (BIGGER SPACING) */}
        <div className="grid grid-cols-4 gap-8">
          {/* 🏆 SCORE CARD (BIGGER) */}
          <div className="col-span-1 bg-background border border-border rounded-xl p-8 flex flex-col items-center justify-center text-center min-h-[300px]">
            <div className="w-36 h-36 rounded-full border-4 border-primary flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.5)]">
              <div>
                <p className="text-2xl font-bold text-text">8/10</p>
                <p className="text-sm text-muted">80%</p>
              </div>
            </div>

            <p className="mt-6 text-text text-lg font-semibold">
              Great Performance 🚀
            </p>
          </div>

          {/* 📊 SUMMARY (BIGGER TEXT + SPACING) */}
          <div className="col-span-1 bg-background border border-border rounded-xl p-6 min-h-[300px]">
            <h2 className="text-text font-semibold mb-5 text-lg">Summary</h2>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Category</span>
                <span className="text-text font-medium">History</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted">Difficulty</span>
                <span className="text-text font-medium">Medium</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted">Correct</span>
                <span className="text-text font-medium">8</span>
              </div>

              <div className="flex justify-between">
                <span className="text-muted">Wrong</span>
                <span className="text-text font-medium">2</span>
              </div>
            </div>
          </div>

          {/* 📜 HISTORY (BIGGER PANEL) */}
          <div className="col-span-1 bg-background border border-border rounded-xl p-6 min-h-[300px]">
            <h2 className="text-text font-semibold mb-5 text-lg">
              Previous Attempts
            </h2>

            <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="flex justify-between items-center p-3 rounded-lg border border-border hover:bg-primary/10 transition-all"
                >
                  <span className="text-text">Attempt #{item}</span>
                  <span className="text-muted">7/10</span>
                </div>
              ))}
            </div>
          </div>

          {/* 🔁 ACTIONS (BIGGER BUTTON AREA) */}
          <div className="col-span-1 bg-background border border-border rounded-xl p-6 flex flex-col justify-center gap-5 min-h-[300px]">
            <button className="bg-primary text-text py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/80 transition-all">
              <LuRotateCcw size={20} />
              <Link to="/quizzes">Retake Quiz</Link>
            </button>

            <button className="bg-surface border border-border text-text py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-border/20 transition-all">
              <LuHouse size={20} />
              <Link to="/">Go Home</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Score;
