import {
  OpenAIEmbeddings,
} from "@langchain/openai";

import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { createClient } from "@supabase/supabase-js";
import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { type Document } from "@langchain/core/documents";

const getRetrievalVectorStoreDetails = () => {
  const client = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_PRIVATE_KEY!,
  );

  const vectorStore = new SupabaseVectorStore(new OpenAIEmbeddings(), {
    client,
    tableName: "documents",
    queryName: "match_documents",
  });

  let resolveWithDocuments: (value: Document[]) => void;
  const documentPromise = new Promise<Document[]>((resolve) => {
    resolveWithDocuments = resolve;
  });

  const retriever = vectorStore.asRetriever({
    callbacks: [
      {
        handleRetrieverEnd(documents) {
          resolveWithDocuments(documents);
        },
      },
    ],
  });

  const combineDocumentsFn = (docs: Document[]) => {
    const serializedDocs = docs.map((doc) => doc.pageContent);
    return serializedDocs.join("\n\n");
  };

  const chain = retriever.pipe(combineDocumentsFn);

  return {
    documentPromise,
    retriever,
    chain,
  };
};

const getIngestVectorStoreDetails = async (text: string) => {
  const client = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_PRIVATE_KEY!,
  );

  const splitter = RecursiveCharacterTextSplitter.fromLanguage("markdown", {
    chunkSize: 256,
    chunkOverlap: 20,
  });

  const splitDocuments = await splitter.createDocuments([text]);

  const vectorstore = await SupabaseVectorStore.fromDocuments(
    splitDocuments,
    new OpenAIEmbeddings(),
    {
      client,
      tableName: "documents",
      queryName: "match_documents",
    },
  );
};

export {
    getRetrievalVectorStoreDetails,
    getIngestVectorStoreDetails
}
