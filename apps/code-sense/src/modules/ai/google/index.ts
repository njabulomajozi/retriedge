import { VertexAI } from '@langchain/google-vertexai';

const llm = new VertexAI({
    temperature: 0.7,
    authOptions: {
        projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
    },
});

export {
    llm
}