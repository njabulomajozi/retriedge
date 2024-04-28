'use client';

import { useEffect, useState } from 'react';
import { useRequest } from '@app/hooks/useRequest';
import Messages from '@app/components/Messages';
import CodeResponse from '@app/components/Code-Response';

export default function Home() {
	const [triggerRequest, setTriggerRequest] = useState(false);
	const { data, error, isLoading } = useRequest({
		path: '/code-sense',
		method: 'POST',
		body: {},
		trigger: triggerRequest,
	});

	useEffect(() => {
		if (triggerRequest) {
			console.log(data, error);
			setTriggerRequest(false);
		}
	}, [triggerRequest]);

	const markdown = data ? data.response : null;

	return (
		<div className="flex flex-wrap h-full">
			<div className="w-7/12 p-2 h-screen overflow-y-auto">
				<CodeResponse markdown={markdown} />
			</div>
			<div className="w-5/12 h-screen overflow-y-auto bg-slate-200 p-4 dark:bg-slate-900">
				<Messages />
				<button
					onClick={() => setTriggerRequest(true)}
					disabled={isLoading}
				>
					Send Request
				</button>
			</div>
		</div>
	);
}
