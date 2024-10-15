import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                className="h-6 md:h-8 w-6 md:w-8 mr-1 md:mr-2"
                src="https://reactjs.org/favicon.ico"
                alt="React Logo"
              />
              <span className="font-bold text-lg md:text-xl">리액트 미니 블로그</span>
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              게시글 보기
            </Link>
            <Link
              to="/presentation"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ml-0 md:ml-4"
            >
              중간 발표
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}