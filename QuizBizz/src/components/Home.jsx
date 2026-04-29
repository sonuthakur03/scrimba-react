import React from "react";
import { LuBrain } from "react-icons/lu";
import Logo from "./Logo";

const Home = () => {
  return (
    <section className="flex-center justify-between">
      <div className="max-w-[50%]">
        <h2 className="font-heading text-7xl ">
          Learn, Challenge, and <span className="text-primary">Win!</span>
        </h2>
        <p>
          Join thousands of learners and challenge yourself with our exciting
          quizzes across various topics!
        </p>
        <div className="flex-center gap-4">
          <button className=" text-text font-semibold py-2 px-8 border border-border rounded-md">
            Sign In
          </button>
          <button className="bg-primary text-text font-semibold py-2 px-8 border border-border rounded-md">
            Sign Up
          </button>
        </div>
      </div>
      <div className="h-[500px] w-[500px]">
        <Logo size={400} />
      </div>
    </section>
  );
};

export default Home;
