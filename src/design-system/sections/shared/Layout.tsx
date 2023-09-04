import Footer from '../../../modules/shared/molecules/Footer';
import Header from '../../../modules/shared/molecules/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="mx-48 py-12">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
