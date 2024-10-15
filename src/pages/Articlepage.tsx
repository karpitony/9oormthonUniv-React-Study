import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import 'github-markdown-css'
import './github-markdown-plus.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { FaHome } from "react-icons/fa"
import ReactLogo from '../assets/react.svg'

export default function ArticlePage() {
  const [markdownText, setMarkdownText] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const { weekSlug } = useParams()

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/karpitony/9oormthonUniv-React-Study/refs/heads/main/article/${weekSlug}.md`
    )
      .then((response) => response.text())
      .then((text) => {
        setMarkdownText(text)
        setTimeout(() => setLoading(false), 300)
      })
      .catch((error) => {console.error(error)})
  }, [weekSlug])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 flex flex-col items-center p-3 md:p-6">
      <div className="w-full max-w-full md:max-w-4xl"> 
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-3 md:mb-6"
        >
          <FaHome className='mr-2 w-6 h-6'/>
          Back to Main Page
        </Link>

        {/* 로딩 중일 때 React 아이콘을 보여줌 */}
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <img
              src={ReactLogo}
              alt="React Logo"
              className="w-40 h-40 animate-spin"
            />
          </div>
        ) : (
          <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4 md:p-8 shadow-lg border border-gray-700 md:border-none">
            <div className="markdown-body bg-transparent text-gray-100">
              <ReactMarkdown
                rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings]}
                components={{
                  h1: ({ node, ...props }) => <h1 className="text-4xl font-bold mb-4 text-blue-400" {...props} />,
                  h2: ({ node, ...props }) => <h2 className="text-3xl font-semibold mb-3 mt-6 text-blue-300" {...props} />,
                  h3: ({ node, ...props }) => <h3 className="text-2xl font-medium mb-2 mt-4 text-blue-200" {...props} />,
                  a: ({ node, ...props }) => <a className="text-blue-400 hover:text-blue-300 transition-colors duration-200" {...props} />,
                  code({ node, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return match ? (
                      <SyntaxHighlighter
                        style={nightOwl}
                        showLineNumbers
                        language={match[1]}
                        PreTag="pre"
                      >
                        {String(children).trim()}
                      </SyntaxHighlighter>
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {markdownText}
              </ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
