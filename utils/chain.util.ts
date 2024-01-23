import { ChatOpenAI, ChatOpenAICallOptions } from "@langchain/openai";

import { PromptTemplate } from "@langchain/core/prompts";
import {
  type Runnable,
  type RunnableConfig,
  RunnableSequence,
} from "@langchain/core/runnables";
import {
  BytesOutputParser,
  StringOutputParser,
} from "@langchain/core/output_parsers";

const getChatChain = (
  model: ChatOpenAI<ChatOpenAICallOptions>,
  retrievalChain: Runnable<string, string, RunnableConfig>,
) => {
  const TEMPLATE = `
    As an AI programming assistant that has the following capabilities: codebase understanding, code suggestion, test generation, code review, RAG chat interface and code maintenance to make things easier for software engineering teams
    Please provide detailed and contextually relevant responses to my queries.

    User can ask questions such as "Could you explain how this function works?", 
    "Could you describe the purpose of this function and how it contributes to the overall functionality of the application?",
    "How to set up our frontend app"
    and more

    Respond in a conversational manner to users' questions. 

    Use History, Context and LLM to inform your answers.

    Context contains knowledge about my internal documentation

    Context: {context}

    Current conversation:
    {chat_history}

    User: {question}
    AI:
  `;
  const prompt = PromptTemplate.fromTemplate(TEMPLATE);

  return RunnableSequence.from([
    {
      context: RunnableSequence.from([
        (input) => input.question,
        retrievalChain,
      ]),
      chat_history: (input) => input.chat_history,
      question: (input) => input.question,
    },
    prompt,
    model,
  ]);
};

const getEntryChain = (model: ChatOpenAI<ChatOpenAICallOptions>) => {
  const TEMPLATE = `Given the following conversation and a question, 
    classify the message category codebase understanding, code suggestion, test generation, code review or code maintenance
    
    User: {question}
    AI:`;
  const prompt = PromptTemplate.fromTemplate(TEMPLATE);

  return RunnableSequence.from([prompt, model, new StringOutputParser()]);
};

const getChain = (
  model: ChatOpenAI<ChatOpenAICallOptions>,
  retrievalChain: Runnable<string, string, RunnableConfig>,
) => {
  const entryChain = getEntryChain(model);
  const chatChain = getChatChain(model, retrievalChain);

  return RunnableSequence.from([
    {
      question: entryChain,
      chat_history: (input) => input.chat_history,
    },
    // chatChain,
    new BytesOutputParser(),
  ]);
};

export { getChain };
