import { ChatOpenAI } from "@langchain/openai";

const getModel = () => {
  return new ChatOpenAI({
    modelName: "gpt-3.5-turbo-1106",
    temperature: 0.2,
  });
};

export { getModel };
