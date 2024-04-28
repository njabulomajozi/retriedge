import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/monokai.css';

interface IProps {
	direction: 'left' | 'right';
}

const markdown = `
\`\`\`javascript
function helloWorld() {
 console.log("Hello, world!");
}
\`\`\`
`;

const Message = (props: IProps) => {
	const { direction } = props;

	const containerClass =
		direction === 'left'
			? 'flex items-start'
			: 'flex flex-row-reverse items-start';

	return (
		<div className={containerClass}>
			<img
				className="ml-2 h-8 w-8 rounded-full"
				src="https://dummyimage.com/128x128/354ea1/ffffff&text=G"
			/>

			<div className="flex min-h-[85px] rounded-b-xl rounded-tl-xl bg-slate-50 p-4 dark:bg-slate-800 sm:min-h-0 sm:max-w-md md:max-w-2xl">
                <Markdown rehypePlugins={[rehypeHighlight]}>{markdown}</Markdown>
			</div>
			<div className="mr-2 mt-1 flex flex-col-reverse gap-2 text-slate-500 sm:flex-row">
				<button className="hover:text-blue-600" type="button">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 24 24"
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
						<path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
						<path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
					</svg>
				</button>
				<button className="hover:text-blue-600" type="button">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 24 24"
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
						<path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3"></path>
					</svg>
				</button>
				<button className="hover:text-blue-600">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 24 24"
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
						<path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
					</svg>
				</button>
			</div>
		</div>
	);
};

const Messages = () => {
	return (
		<div className="flex-1 space-y-6 overflow-y-auto rounded-xl bg-slate-200 p-4 text-sm leading-6 text-slate-900 shadow-sm dark:bg-slate-900 dark:text-slate-300 sm:text-base sm:leading-7">
			<Message direction="left" />
            <Message direction="right" />
		</div>
	);
};

export default Messages;
