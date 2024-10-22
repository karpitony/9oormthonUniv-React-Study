import cn from '@yeahx4/cn'
import ReactLogo from '../assets/react.svg'
import { Link } from 'react-router-dom'

const articleData = [
  { link: 'week01', week: '1주차', date: '9/02 ~ 9/08', title: '리액트 웹 예제 클론코딩' },
  { link: 'week02', week: '2주차', date: '9/09 ~ 9/15', title: '리액트 복습 + 미니 사이드 프로젝트' },
  { link: 'week03', week: '3주차', date: '9/16 ~ 9/22', title: 'TypeScript 기본 문법과 활용' },
  { link: 'week04', week: '4주차', date: '9/23 ~ 9/29', title: '🏆 구름톤 연합 해커톤 참가 및 대상 후기' },
  { link: 'week05', week: '5주차', date: '9/30 ~ 10/06', title: ' Axios API 통신 라이브러리 + OpenAPI 사용해보기' },
  { link: 'week06', week: '6주차', date: '10/07 ~ 10/13', title: '동국x숙명x경기 연합 CRUD 스터디 회고' },
  { link: 'week07', week: '7주차', date: '10/14 ~ 10/20', title: '리액트로 미니 블로그 만들기' },
]

export default function MainPage() {
  return (
    <div className="min-h-[95vh] bg-gradient-to-br from-gray-900 to-black text-gray-100 flex flex-col items-center justify-center p-6">
      <header className="text-center mb-8 md:mb-16">
        <h1 className="text-3xl md:text-6xl font-extrabold mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 flex items-center">
          <img 
            src={ReactLogo} 
            alt="React Logo" 
            className="w-8 md:w-12 h-8 md:h-12 animate-spin mr-2"
          />
          리액트 스터디 기록
          <img 
            src={ReactLogo} 
            alt="React Logo" 
            className="w-8 md:w-12 h-8 md:h-12 animate-spin ml-2"
          />
        </h1>
        <h2 className="text-lg md:text-2xl font-medium text-gray-400">
          ☁️ 구름톤 유니브 3기 동국대
        </h2>
    </header>

      <div className="w-full max-w-5xl grid gap-6 md:grid-cols-2">
        {articleData.map((article, index) => (
          <Link
            key={index}
            to={`/${article.link}`}
            className={cn(
              "group relative p-6 bg-gray-800 bg-opacity-50 rounded-lg",
              "transition duration-300 hover:bg-opacity-70 hover:shadow-lg hover:shadow-blue-500/10",
              "border border-gray-700 hover:border-blue-500/50"
            )}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-base font-semibold text-blue-400">{article.week}</span>
              <span className="text-xs text-gray-500">{article.date}</span>
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-2">
              {article.title}
            </h3>
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      <footer className="mt-16 text-gray-500 text-sm">
        &copy; 2024 YUNSEOK SONG
      </footer>
    </div>
  );
}