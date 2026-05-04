import React from "react";
import QuizForm from "./Quiz/QuizForm";
import QuizMCQ from "./Quiz/QuizMCQ";
import QuizTF from "./Quiz/QuizTF";

const Quiz = () => {
  const [isQuestionsFetched, setIsQuestionsFetched] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

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

  return (
    <section className="flex items-center justify-center flex-col h-[75vh] w-[70%] bg-background">
      <div className="bg-surface border border-border p-10 rounded-2xl drop-shadow-[0_0_15px_rgba(99,102,241,0.2)] flex-center flex-col w-full">
        {isQuestionsFetched ? (
          data?.[0]?.type === "multiple" ? (
            <QuizMCQ data={data} />
          ) : (
            <QuizTF data={data} />
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
