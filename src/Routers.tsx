import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Article from './pages/Article';
import Presentation from './pages/Presentation';
import Layout from './pages/_layout';

export default function Routers() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />, // 레이아웃 컴포넌트를 부모로 설정
      children: [
        {
          index: true, // 기본 경로 설정 (path: '/')
          element: <MainPage />,
        },
        {
          path: ':weekSlug', // path: '/:weekSlug'
          element: <Article />,
        },
        {
          path: 'presentation', // path: '/presentation'
          element: <Presentation />,
        },
        {
          path: '*', // 모든 다른 경로 (Not Found 페이지)
          element: (
            <h3>
              <b>NOT FOUND PAGE</b>
            </h3>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
