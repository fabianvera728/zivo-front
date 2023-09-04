import { Banner } from './Banner';
import { HomeTitle } from './HomeTitle';
import { PostFilters } from './PostFilters';
import { PostList } from '../../../../design-system/sections/auth/PostList';

const Home = () => {
  return (
    <>
      <HomeTitle />
      <div className="mt-8"></div>
      <PostFilters />
      <div className="mt-20"></div>
      <Banner />
      <div className="mt-20"></div>
      <PostList />
    </>
  );
};

export default Home;
