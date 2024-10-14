import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainPage from './pages/MainPage'
import Article from './pages/Articlepage'

export default function Routers() {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        { path: '/', element: <MainPage /> },
        { path: '/article/:weekSlug', element: <Article /> },
      ],
    },
    {
      path: '*',
      element: (
        <h3>
          <b>NOT FOUND PAGE</b>
        </h3>
      ),
    },
  ])
  return <RouterProvider router={router} />
}