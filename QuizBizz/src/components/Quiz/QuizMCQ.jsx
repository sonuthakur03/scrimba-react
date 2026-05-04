import React from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
const QuizMCQ = ({ data }) => {
  // State to track the current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);

  const handleNext = () => {
    if (currentQuestionIndex < data.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Function to shuffle options for each question
  const shuffleArray = (array) => {
    const shuffled = [...array]; // copy to avoid mutation

    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      // swap
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
  };

  // Format the data to include shuffled options for each question
  const formattedData = data?.map((q) => ({
    ...q,
    options: shuffleArray([q.correct_answer, ...q.incorrect_answers]),
  }));
  // console.log("Original data: ", data);
  // console.log(formattedData);

  return (
    <>
      <h2 className="font-heading text-3xl font-bold text-text mb-8">
        Multiple Choice Questions
      </h2>
      {formattedData?.map((question, index) => {
        return index === currentQuestionIndex ? (
          <div key={index + 1} className="flex-center flex-col w-[90%]">
            <div className="block mb-3 text-lg font-bold text-text font-body self-start">
              <p>Category: {question.category}</p>
              <p>Difficulty: {question.difficulty}</p>
            </div>
            <div className="block mb-3 text-md font-medium text-muted font-body self-start">
              Question {index + 1} of {data.length}
            </div>
            <div className="block my-3 text-md font-medium text-text font-body self-start">
              Question {index + 1} : {question.question}
            </div>
            <div className="grid grid-cols-2 place-items-strech gap-4 mt-4 w-full">
              {question.options.map((option, optIndex) => (
                <div
                  key={optIndex + 1}
                  className={`bg-surface border border-border py-4 px-8  rounded-xl hover:bg-primary hover:text-text hover:translate-y-[-4px] cursor-pointer transition-all  flex-center justify-start`}
                >
                  {optIndex + 1}. {option}
                </div>
              ))}
            </div>
          </div>
        ) : null;
      })}
      <div className="flex-center gap-4 mt-8">
        <button
          className={`bg-primary text-text p-4  w-[200px] rounded-xl hover:bg-primary/80 transition-all flex-center gap-2 ${
            currentQuestionIndex === 0 ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          <LuChevronLeft size={24} className="text-3xl" />
          Previous
        </button>
        <button
          className={`bg-primary  text-text p-4 w-[200px] rounded-xl hover:bg-primary/80 transition-all flex-center gap-2 ${
            currentQuestionIndex === data.length - 1
              ? "cursor-not-allowed opacity-50"
              : ""
          }`}
          onClick={handleNext}
          disabled={currentQuestionIndex === data.length - 1}
        >
          Next
          <LuChevronRight size={24} className="text-3xl" />
        </button>
      </div>
    </>
  );
};

export default QuizMCQ;
