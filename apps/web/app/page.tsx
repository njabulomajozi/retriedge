'use client';

import { useEffect, useRef, useState } from 'react';
import Message from '@app/components/Message';
import Prompt from '@app/components/Prompt';
import Placeholder from '@app/components/Placeholder';

const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;

export default function Home() {
	const scrollRef = useRef<HTMLDivElement>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [messages, setMessages] = useState<
		Array<{ markdown: string; direction: 'left' | 'right' }>
	>([]);

	useEffect(() => {
		if (!isLoading && scrollRef.current) {
			scrollRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}, [isLoading]);

	const handlePromptTrigger = async (type: 'GENERATE' | 'SCHEMA') => {
		try {
			setIsLoading(true);
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
					direction: 'left',
				},
			]);
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex flex-col p-4">
			<div className="space-y-4">
				{messages.map(({ direction, markdown }) => (
					<Message
						key={markdown}
						direction={direction}
						markdown={markdown}
					/>
				))}
			</div>
			<div className="" ref={scrollRef}>
				{isLoading ? (
					<Placeholder />
				) : (
					<Prompt handlePromptTrigger={handlePromptTrigger} />
				)}
			</div>
		</div>
	);
}
