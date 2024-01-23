import { NextRequest, NextResponse } from "next/server";
import { StreamingTextResponse } from "ai";

import { getModel } from "@/utils/model.util";
import { getRetrievalVectorStoreDetails } from "../../../utils/vector-store.util";
import { getChain } from "@/utils/chain.util";
import {
  getStream,
  getStreamResponseHeaders,
} from "../../../utils/stream.util";

export const runtime = "edge";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages = body.messages ?? [];
    const previousMessages = messages.slice(0, -1);
    const currentMessageContent = messages[messages.length - 1].content;

    const model = getModel();
    
    const {
      documentPromise,
      retriever,
      chain: retrievalChain,
    } = getRetrievalVectorStoreDetails();

    const chain = getChain(model, retrievalChain);

    const stream = await getStream(
      chain,
      previousMessages,
      currentMessageContent,
    );
    const headers = await getStreamResponseHeaders(
      documentPromise,
      previousMessages,
    );

    return new StreamingTextResponse(stream, {
      headers,
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: e.status ?? 500 });
  }
}
