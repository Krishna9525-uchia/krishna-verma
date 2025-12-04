import { GoogleGenAI } from "@google/genai";

const API_KEY = "AIzaSyBxGuSRdkIO685mJMwaR59zGbgkwAg2XAQ";

export const getExplanation = async (
  calculatorTitle: string, 
  inputs: Record<string, any>, 
  results: any[]
): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    const model = "gemini-2.5-flash";

    const prompt = `
      I am using a ${calculatorTitle}.
      
      Here are my inputs:
      ${JSON.stringify(inputs, null, 2)}
      
      Here are the results:
      ${JSON.stringify(results, null, 2)}
      
      Please provide a brief, helpful explanation of what these results mean for me. 
      Focus on actionable advice. Limit to 150 words.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text || "Could not generate an explanation.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I couldn't generate an explanation at this time.";
  }
};