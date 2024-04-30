'use client';

import { useEffect, useRef, useState } from 'react';
import Message from '@app/components/Message';
import Prompt from '@app/components/Prompt';
import Animation from '@app/components/Animation';

import AskAQuestion from '../public/animations/ask-a-question.json';
import LoadingAi from '../public/animations/loading-ai.json';

const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;

const EmptyMessagesPlaceholder = () => {
	return (
		<div className='flex flex-col'>
			<Animation animationData={AskAQuestion} />
			<h2 className='text-center text-4xl font-extrabold'>Ask me anything</h2>
		</div>
	);
};

const LoadingAIPlaceholder = () => {
	return (
		<div className='flex flex-col'>
			<Animation animationData={LoadingAi} />
		</div>
	);
};

export default function Home() {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [messages, setMessages] = useState<
		Array<{ markdown: string; type: 'U' | 'S' | 'A' }>
	>([]);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		if (!isLoading && scrollRef.current) {
			scrollRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [isLoading]);

	const handlePromptTrigger = async (type: 'GENERATE' | 'SCHEMA') => {
		try {
			setIsLoading(true);
			setError(null);
			const url = `${baseUrl}/code-sense`;

			const response = await fetch(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					type,
				}),
			});

			if (!response.ok) {
				throw new Error(await response.text());
			}

			const responseData = await response.json();

			setMessages((prevMessages) => [
				...prevMessages,
				{
					markdown: responseData.data.response,
					type: 'A',
				},
			]);
		} catch (err) {
			console.error(err);
			setError(err as Error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex flex-col w-full h-screen justify-between p-4a">
			<div className="h-[82%] p-2 space-y-8 overflow-y-auto overflow-x-auto">
				{
					messages.map(({ type, markdown }) => (
						<Message
							key={markdown}
							type={type}
							markdown={markdown}
						/>
					))
				}

				{
					!messages.length && !isLoading && <EmptyMessagesPlaceholder />
				}

				{
					isLoading && <LoadingAIPlaceholder />
				}
			</div>
			<div className="fixed bottom-0 p-4 flex flex-col">
				<Prompt handlePromptTrigger={handlePromptTrigger} />
			</div>
		</div>
	);
}
