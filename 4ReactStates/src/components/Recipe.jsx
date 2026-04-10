import ReactMarkdown from "react-markdown";

const Recipe = ({ recipe }) => {
  // console.log(recipe);
  return (
    <section className="flex flex-col justify-center w-full gap-4 px-20 py-8 suggested-recipe-container">
      <h2 className="text-2xl text-[#141413] font-bold">
        Chef Qwen Recommends:
      </h2>
      <article className="text-[#475467]" aria-live="polite">
        <ReactMarkdown children={recipe} />
      </article>
    </section>
  );
};

export default Recipe;
