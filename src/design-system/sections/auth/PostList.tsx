import { Pagination } from '@nextui-org/react';
import { PostCard } from '../../molecules/blog/PostCard';

export const PostList = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid grid-cols-3 gap-28">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <Pagination total={10} initialPage={1} />
    </div>
  );
};
