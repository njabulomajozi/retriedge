import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/monokai.css';

interface IProps {
    markdown: string | null
}

const CodeResponse = (props: IProps) => {
    const { markdown } = props;
    return (
        <Markdown rehypePlugins={[rehypeHighlight]}>{markdown}</Markdown>
    )
};

export default CodeResponse;