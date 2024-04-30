import { FC, memo } from 'react';
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/monokai.css';

interface IProps {
	type: 'U' | 'S' | 'A';
	markdown: string;
}

const Message: FC<IProps> = memo(({ type, markdown }) => {
	const imgUrl = `https://dummyimage.com/128x128/354ea1/ffffff&text=${type.toUpperCase()}`;

	return (
		<div className="bg-slate-300 px-12 py-4 rounded-lg">
			<div className="pb-4">
				<img className="rounded-xl h-14 w-14" src={imgUrl} />
			</div>
			<Markdown rehypePlugins={[rehypeHighlight]}>{markdown}</Markdown>
		</div>
	);
});

export default Message;
