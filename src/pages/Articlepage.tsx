import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import 'github-markdown-css'
import './github-markdown-plus.css'

export default function ArticlePage() {
  const [markdownText, setMarkdownText] = useState<string>('')
  const { weekSlug } = useParams()

  useEffect(() => {
    fetch(
      `https://raw.githubusercontent.com/karpitony/9oormthonUniv-React-Study/refs/heads/main/article/${weekSlug}.md`
    )
      .then((response) => response.text())
      .then((text) => setMarkdownText(text))
      .catch((error) => console.error(error))
  }, [weekSlug])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 mb-6"
        >
          Back to Main Page
        </Link>
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-8 shadow-lg border border-gray-700">
          <div className="markdown-body bg-transparent text-gray-100">
            <ReactMarkdown
              rehypePlugins={[rehypeRaw, rehypeSlug, rehypeAutolinkHeadings]}
              components={{
                h1: ({node, ...props}) => <h1 className="text-4xl font-bold mb-4 text-blue-400" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-3xl font-semibold mb-3 mt-6 text-blue-300" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-2xl font-medium mb-2 mt-4 text-blue-200" {...props} />,
                a: ({node, ...props}) => <a className="text-blue-400 hover:text-blue-300 transition-colors duration-200" {...props} />,
                code: ({node, inline, ...props}) => 
                  inline 
                    ? <code className="bg-gray-700 rounded px-1 py-0.5" {...props} />
                    : <code className="bg-gray-700 rounded p-3 my-2" {...props} />,
                pre: ({node, ...props}) => <pre className="bg-gray-700 rounded p-4 my-4 overflow-x-auto" {...props} />,
              }}
            >
              {markdownText}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  )
}