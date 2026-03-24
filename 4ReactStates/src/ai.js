// ai.js
import { InferenceClient } from "@huggingface/inference";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. 
You don't need to use every ingredient they mention. 
You can include additional ingredients, but try not to include too many extra ingredients. 
Format your response in markdown to make it easier to render to a web page.
`;

const PRIMARY_CHAT_MODEL = "Qwen/Qwen2.5-7B-Instruct";
const FALLBACK_MODEL = "gpt2";

// Initialize client with your HF token
const client = new InferenceClient(import.meta.env.VITE_HF_ACCESS_TOKEN);

export async function getRecipeFromAI(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");
  if (!ingredientsString) return "No ingredients provided.";

  try {
    const response = await client.chatCompletion({
      model: PRIMARY_CHAT_MODEL,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `I have ${ingredientsString}. Suggest a recipe I can make.`,
        },
      ],
      max_tokens: 400,
    });
    // console.log("Primary model response:", response);

    const recipe = response.choices?.[0]?.message?.content?.trim();
    if (recipe) return recipe;

    throw new Error("Primary model returned an empty response.");
  } catch (primaryError) {
    console.warn(
      "Primary chat model failed, using fallback model.",
      primaryError,
    );

    try {
      const fallbackResponse = await client.textGeneration({
        model: FALLBACK_MODEL,
        inputs: `${SYSTEM_PROMPT}\nIngredients: ${ingredientsString}\nRecipe:`,
        parameters: {
          max_new_tokens: 220,
          return_full_text: false,
        },
      });

      return fallbackResponse.generated_text?.trim() || "No recipe generated.";
    } catch (fallbackError) {
      console.error("HuggingFace API error:", fallbackError);
      return "Failed to fetch recipe.";
    }
  }
}
