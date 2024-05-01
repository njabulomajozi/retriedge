import { FC, useEffect } from 'react';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

interface IProps {
	id: string;
	handlePromptTrigger: (type: 'GENERATE' | 'SCHEMA') => Promise<void>;
}

interface ISuggestion {
	key: 'GENERATE' | 'SCHEMA';
	title: string;
}

const suggestions: Array<ISuggestion> = [
	{
		key: 'GENERATE',
		title: 'Generate test data',
	},
	{
		key: 'SCHEMA',
		title: 'Get schema',
	},
];

const onboarding = () => {
	const driverObj = driver({
		showProgress: true,
		steps: [
			{
				element: '#RETRIEDGE_TESTING_PROMPT_GENERATE',
				popover: {
					title: 'Test data',
					description: `To generate test data click the "Generate" button`,
					side: 'top',
					align: 'start',
				},
			},
			{
				element: '#RETRIEDGE_TESTING_PROMPT_SCHEMA',
				popover: {
					title: 'DB Schema',
					description: `To learn more about the DB schema click the "Get Schema" button`,
					side: 'top',
					align: 'start',
				},
			},
		],
	});

	return driverObj;
};

const Prompt: FC<IProps> = ({ id, handlePromptTrigger }) => {
	useEffect(() => {
		onboarding().drive();
	}, []);

	return (
		<div id={id} className="flex justify-end overflow-x-auto">
			{suggestions.map(({ key, title }) => (
				<button
					key={key}
					id={`${id}_${key}`}
					onClick={() => handlePromptTrigger(key)}
					className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
				>
					{title}
				</button>
			))}
		</div>
	);
};

export default Prompt;
