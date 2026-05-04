import React from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const QuizTF = () => {
  const options = [
    { id: 1, text: "True" },
    { id: 2, text: "False" },
  ];

  return (
    <>
      <h2 className="font-heading text-3xl font-bold text-text mb-8">
        True / False Quiz
      </h2>

      <div className="block mb-3 text-md font-bold text-text font-body">
        Question 1 : The capital of France is Paris.
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        {options.map((option) => (
          <div
            key={option.id}
            className="bg-surface border border-border py-4 px-16 rounded-xl 
                       hover:bg-primary hover:text-text hover:-translate-y-1
                       cursor-pointer transition-all flex-center text-lg font-semibold"
          >
            {option.text}
          </div>
        ))}
      </div>

      <div className="flex-center gap-4 mt-8">
        <button className="bg-primary text-text p-4 w-[200px] rounded-xl hover:bg-primary/80 transition-all flex-center gap-2">
          <LuChevronLeft size={24} />
          Previous
        </button>

        <button className="bg-primary text-text p-4 w-[200px] rounded-xl hover:bg-primary/80 transition-all flex-center gap-2">
          Next
          <LuChevronRight size={24} />
        </button>
      </div>
    </>
  );
};

export default QuizTF;
