import { ArrowTr } from 'iconoir-react';

export const PostCard = () => {
  return (
    <div className="flex flex-col">
      <img src="https://picsum.photos/200/200" className="" alt="post" />
      <div className="flex flex-col">
        <span className="text-sm font-bold py-2">
          Phoenix Baker * 19 Jan 2022
        </span>
        <div className="flex flex-row justify-between items-center">
          <h3 className="text-xl font-bold">Migrating to Linear 101</h3>
          <ArrowTr />
        </div>
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
      </div>
      <div className="flex flex-row items-center mt-2 gap-2">
        <div className="block text-sm bg-white border border-primary-dark px-4 py-1 font-semibold rounded-3xl">
          DataStage
        </div>
        <div className="block text-sm bg-white border border-primary-dark px-4 py-1 font-semibold rounded-3xl">
          Error 911
        </div>
      </div>
    </div>
  );
};
