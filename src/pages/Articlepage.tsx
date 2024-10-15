import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import 'github-markdown-css'

export default function ArticlePage() {
  const [markdownText, setMarkdownText] = useState<string>('');
  const { weekSlug } = useParams();

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/karpitony/9oormthonUniv-React-Study/refs/heads/main/article/${weekSlug}.md`
    )
      .then((response) => response.text())
      .then((text) => setMarkdownText(text))
      .catch((error) => console.error(error));
  }, [weekSlug]);

  return (
    <div className='markdown-body'>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]} 
        rehypePlugins={[rehypeRaw]}
        children={markdownText} 
      />
    </div>
  );
}
