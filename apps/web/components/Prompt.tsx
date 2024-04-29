interface IProps {
	handlePromptTrigger: (type: 'GENERATE' | 'SCHEMA') => Promise<void>
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
		<>
			<div className="mt-4 flex w-full gap-x-2 overflow-x-auto whitespace-nowrap text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
				{suggestions.map(({ key, title }) => (
					<button
						key={key}
						onClick={() => handlePromptTrigger(key)}
						className="rounded-lg bg-slate-200 p-2 hover:bg-blue-600 hover:text-slate-200 dark:bg-slate-800 dark:hover:bg-blue-600 dark:hover:text-slate-50"
					>
						{title}
					</button>
				))}
			</div>
			{/* <form>
				<label htmlFor="chat-input" className="sr-only">
					Enter your prompt
				</label>
				<div className="relative">
					<button
						type="button"
						className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600"
					>
						<svg
							aria-hidden="true"
							className="h-5 w-5"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							strokeWidth="2"
							stroke="currentColor"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path
								stroke="none"
								d="M0 0h24v24H0z"
								fill="none"
							></path>
							<path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z"></path>
							<path d="M5 10a7 7 0 0 0 14 0"></path>
							<path d="M8 21l8 0"></path>
							<path d="M12 17l0 4"></path>
						</svg>
						<span className="sr-only">Use voice input</span>
					</button>
					<textarea
						id="chat-input"
						className="mt-2 block w-full resize-none rounded-xl border-none bg-slate-200 p-4 pl-10 pr-20 text-sm text-slate-900 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-800 dark:text-slate-200 dark:placeholder-slate-400 dark:focus:ring-blue-600 sm:text-base"
						placeholder="Enter your prompt"
						// rows="1"
						required
					></textarea>
					<button
						type="submit"
						className="absolute bottom-2 right-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:text-base"
					>
						Send <span className="sr-only">Send message</span>
					</button>
				</div>
			</form> */}
		</>
	);
};

export default Prompt;
