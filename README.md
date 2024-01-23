# Retriedge
Understanding the new codebase, adapting to new team code standards, and writing documentation and code tests make a software engineering team workflow challenging.

That's where retriedge comes in as AI programming assistant that make things easier for software engineering teams with the features below

## FEATURES
**[] Chat**: A conversational interface offered by Retriedge would enable developers to converse in natural language while posing inquiries. This would help in understanding the codebase and the purpose of each source code file.

**[] Codebase understanding**: To help users comprehend the structure, dependencies, and general architecture of the current codebase, Retriedge would analyse it. It would use the information gathered from this analysis to provide pertinent recommendations and produce tests consistent with the current codebase. This knowledge would also be used to help with code reviews, helping to spot any discrepancies or possible areas for improvement.

**[] Code Suggestion**: Retriedge would offer intelligent code recommendations using AI autocomplete, depending on the code's context. This could entail proposing alternate approaches to implementing a specific capability or recommending the completion of a method or variable name.

**[] Test Generation**: Retriedge would construct unit tests for the code automatically using artificial intelligence and metaprogramming techniques. This would guarantee thorough test coverage and early detection of flaws or difficulties.

**[] Code Review**: Retriedge would support the code review procedure by emphasising potential security vulnerabilities, pointing out possible areas for improvement, and ensuring that coding standards and best practices are followed.

**[] Maintenance**: Retriedge would help preserve the codebase by pointing out obsolete or superfluous code, suggesting enhancements to the current code, and helping with refactoring to increase readability and efficiency.

### Access
[] Web: One potential release for Retriedge would be a web application. Users can interact with software using a web browser without installing it. As a result, anyone with an internet connection could access Retriedge from anywhere. Real-time code suggestions, code reviews, and documentation production are all possible features for the web version.

[] Visual Studio Code: Retriedge would be a Visual Studio Code addon that works smoothly with the editor to provide real-time code assistance. Within the comfort of their preferred development environment, developers could conduct code reviews, produce tests, and receive code suggestions using Retriedge. This solution harnesses the capabilities of the VS Code platform, including features like syntax highlighting, error detection, and an integrated terminal.

[] Docker: Companies and developers can still install Retriedge in a Docker container on their machines and connect to it via the network. This technique allows for scalability, instance isolation, and ease of setup and deployment. Additionally, Docker facilitates managing and configuring their own version of external data sources, such as a vector store and model.

# TECH STACK
- [Next.js](https://nextjs.org/), react framework
- [Tailwind](https://tailwindcss.com/), CSS framework
- [Vercel AI](https://vercel.com/ai), library for building AI-powered streaming text and chat UIs
- [Open AI](https://openai.com/), LLM provider
- [LangChain JS](https://js.langchain.com), framework for developing applications powered by language models
- [Supabase](https://supabase.com/), open source Firebase alternative

# USAGE
- How to run this app locally

    - Clone this repo
    
    - Create your supabase app and create a table and search function in your database as showed [here](https://js.langchain.com/docs/integrations/vectorstores/supabase#create-a-table-and-search-function-in-your-database)
    
    - Create a .env.local file on root of the folder that will have the following configurations to make the app work

        ```make
            # Required: Used for the LLM
            OPENAI_API_KEY="YOUR_API_KEY"
            # Required: Used for vector store retrieval
            SUPABASE_PRIVATE_KEY="YOUR_PRIVATE_KEY"
            SUPABASE_URL="YOUR_URL"
        ```

    - Install project dependencies


        ```bash
        yarn
        ```

    - Run the development server


        ```bash
        yarn dev
        ```

    - Open [http://localhost:3000](http://localhost:3000) with your browser to see the result!
- [] Web
- [] How do you integrate Retriedge into VS Code as an extension?
- [] What are the hosting requirements for Retriedge as a SaaS app via Docker?