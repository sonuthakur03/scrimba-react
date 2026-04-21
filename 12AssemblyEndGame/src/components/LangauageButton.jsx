import { languages } from "../languages";

const LangauageButton = () => {
  return (
    <section className="flex-box flex-wrap w-[75%] gap-2">
      {languages.map((language) => {
        return (
          <button
            style={{
              backgroundColor: language.backgroundColor,
              color: language.color,
            }}
            className="p-2 rounded-sm font-semibold"
          >
            {language.name}
          </button>
        );
      })}
    </section>
  );
};

export default LangauageButton;
