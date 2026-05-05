import React from "react";
import QuizForm from "./Quiz/QuizForm";
import QuizMCQ from "./Quiz/QuizMCQ";
import QuizTF from "./Quiz/QuizTF";

const Quiz = () => {
  const [isQuestionsFetched, setIsQuestionsFetched] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);

  React.useEffect(() => {
    console.log("Fetched:", isQuestionsFetched);
  }, [isQuestionsFetched]);

  // Function to fetch quiz questions based on selected settings
  const handleFetchQuiz = async (quizSettings) => {
    setIsLoading(true);
    const { topic, questions, difficulty, type } = quizSettings;
    if (!topic || !questions || !difficulty || !type) {
      console.log("Fill all fields first");
      setIsLoading(false);
      return;
    }
    // Construct the API URL with query parameters based on selected settings
    const apiUrl = `https://opentdb.com/api.php?amount=${questions}&category=${topic}&difficulty=${difficulty}&type=${type}`;
    console.log("API URL:", apiUrl);
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      console.log("Fetched quiz questions: ", data.results);
      if (data.response_code === 0) {
        setData(data.results);
        setIsQuestionsFetched(true);
      } else {
        console.log("No questions found for this config");
      }
    } catch (error) {
      console.error("Error fetching quiz questions: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Handlers for navigating between questions
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
  const formattedData = data?.map((q) => {
    return {
      ...q,
      options: shuffleArray([q.correct_answer, ...q.incorrect_answers]),
    };
  });
  // Utility function to decode HTML entities in questions and options
  const decodeHTML = (text) => {
    const txt = document.createElement("textarea");
    txt.innerHTML = text;
    return txt.value;
  };

  return (
    <section className="flex items-center justify-center flex-col h-[75vh] w-[70%] bg-background">
      <div className="bg-surface border border-border p-10 rounded-2xl drop-shadow-[0_0_15px_rgba(99,102,241,0.2)] flex-center flex-col w-full">
        {isQuestionsFetched ? (
          data?.[0]?.type === "multiple" ? (
            <QuizMCQ
              data={formattedData}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              currentQuestionIndex={currentQuestionIndex}
              decodeHTML={decodeHTML}
            />
          ) : (
            <QuizTF
              data={formattedData}
              handleNext={handleNext}
              handlePrevious={handlePrevious}
              setCurrentQuestionIndex={setCurrentQuestionIndex}
              currentQuestionIndex={currentQuestionIndex}
              decodeHTML={decodeHTML}
            />
          )
        ) : (
          <QuizForm
            setIsQuestionsFetched={setIsQuestionsFetched}
            handleFetchQuiz={handleFetchQuiz}
          />
        )}
        {isLoading && (
          <p className="text-text mt-2 text-center text-2xl animate-pulse  ">
            Fetching quiz questions...
          </p>
        )}
      </div>
    </section>
  );
};

export default Quiz;
