import { createBrowserRouter } from 'react-router-dom';
import Login from './modules/auth/pages/Login';
import { User } from './modules/auth/core/User';
import Home from './modules/blog/pages/home/Home';
import { Admin } from './Admin';
import { SearchCreation } from './design-system/sections/blog/SearchCreation';
import About from './modules/generics/pages/About';
import Layout from './design-system/sections/shared/Layout';
import MyPosts from './modules/admin/pages/MyPosts';
import Profile from './modules/users/pages/Profile';

const retriveUser = () => {
  const userAsJson = localStorage.getItem('user');
  if (!userAsJson) {
    return null;
  }
  const user = JSON.parse(userAsJson || '') as User;
  return user;
};

const validateUserLogged = () => {
  const user = retriveUser();
  if (user != null) {
    return <Login />;
  } else {
    return <Home />;
  }
};

const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/home',
        element: <Home />,
        loader: validateUserLogged,
      },
      {
        path: '/admin',
        element: <Admin />,
        loader: validateUserLogged,
      },
      {
        path: '/admin/my-posts',
        element: <MyPosts />,
        loader: validateUserLogged,
      },
      {
        path: '/admin/technologies',
        element: <Admin />,
        loader: validateUserLogged,
      },
      {
        path: '/about',
        element: <About />,
        loader: validateUserLogged,
      },
      {
        path: '/search',
        element: <SearchCreation />,
        loader: validateUserLogged,
      },
      {
        path: '/profile',
        element: <Profile />,
        loader: validateUserLogged,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    loader: validateUserLogged,
  },
]);

export default routes;
