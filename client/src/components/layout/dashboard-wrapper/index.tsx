import { PropsWithChildren } from 'react';
import Navbar from '../nav-bar';
import Sidebar from '../side-bar';

const DashboardWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={
        'flex min-h-screen w-full bg-gray-50 text-gray-900 light'
      }
    >
      <Sidebar />
      <main
        className={
          'flex h-full w-full flex-col bg-gray-50 px-9 py-7 md:pl-72'
        }
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
