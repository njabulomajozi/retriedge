import { type Document } from "@langchain/core/documents";

import { RunnableSequence } from "@langchain/core/runnables";

import { type Message as VercelChatMessage } from "ai";

const getStream = async (
  mainChain: RunnableSequence<any, Uint8Array>,
  previousMessages: Array<VercelChatMessage>,
  currentMessageContent: string,
) => {
  const formatVercelMessages = (chatHistory: VercelChatMessage[]) => {
    const formattedDialogueTurns = chatHistory.map((message) => {
      if (message.role === "user") {
        return `Human: ${message.content}`;
      } else if (message.role === "assistant") {
        return `Assistant: ${message.content}`;
      } else {
        return `${message.role}: ${message.content}`;
      }
    });
    return formattedDialogueTurns.join("\n");
  };

  return mainChain.stream({
    question: currentMessageContent,
    chat_history: formatVercelMessages(previousMessages),
  });
};

const getStreamResponseHeaders = async (
  documentPromise: Promise<Document<Record<string, any>>[]>,
  previousMessages: Array<VercelChatMessage>,
) => {
  const documents = await documentPromise;
  const serializedSources = Buffer.from(
    JSON.stringify(
      documents.map((doc) => {
        return {
          pageContent: doc.pageContent.slice(0, 50) + "...",
          metadata: doc.metadata,
        };
      }),
    ),
  ).toString("base64");

  return {
    "x-message-index": (previousMessages.length + 1).toString(),
    "x-sources": serializedSources,
  };
};

export { getStream, getStreamResponseHeaders };
