import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <Outlet />
    </div>
  );
}