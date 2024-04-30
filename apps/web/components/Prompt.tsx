interface IProps {
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

const Prompt = (props: IProps) => {
	const { handlePromptTrigger } = props;

	return (
		<div className="flex justify-end overflow-x-auto">
			{suggestions.map(({ key, title }) => (
				<button
					key={key}
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
