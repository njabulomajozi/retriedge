import config from 'config';
import { VertexAI } from '@langchain/google-vertexai';

const llm = new VertexAI({
    temperature: 0.7,
    authOptions: {
        projectId: config.get<string>('ai.vertex-ai.projectId'),
    },
});

export {
    llm
}