import { Outlet } from 'react-router';
import Header from '../../components/Header/Header';

export default function Layout() {
  return (
    <div>
      <Header />
      <div className='p-2 bg-gray-200 h-screen'>
        <Outlet />
      </div>
    </div>
  );
}
