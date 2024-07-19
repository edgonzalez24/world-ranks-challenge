import { Outlet } from 'react-router-dom';
import Logo from './../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div className="hero-layout">
        <div className="flex justify-center items-center h-full">
          <Link to="/" className='transition duration-300 ease-in-out hover:opacity-85'>
            <img src={Logo} alt="Logo world ranks" />
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
