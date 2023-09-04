import { Avatar, Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';

export const ProfileHeader = () => {
  return (
    <div className="flex flex-col rounded-2xl shadow-md bg-white">
      <div className="rounded-t-2xl h-72 px-6 gap-4 py-4 flex flex-row items-end justify-start bg-[url('https://i.imgur.com/lGPlXlO.jpeg')] bg-cover">
        <Avatar
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          className="w-36 h-36 text-large translate-y-12" />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-primary-dark">Silvia Rojas</h1>
          <p className="text-sm font-bold text-primary-dark">
            Consulta/Creacion
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 justify-center py-6">
        <Button
          variant="light"
          className="text-primary-dark font-bold text-lg ml-8"
        >
          <Link to="/home">About</Link>
        </Button>
        <Button variant="light" className="text-primary-dark font-bold text-lg">
          <Link to="/about">Biography</Link>
        </Button>
        <Button variant="light" className="text-primary-dark font-bold text-lg">
          <Link to="/about">Skills</Link>
        </Button>
        <Button variant="light" className="text-primary-dark font-bold text-lg">
          <Link to="/about">Password</Link>
        </Button>
        <Button variant="light" className="text-primary-dark font-bold text-lg">
          <Link to="/about">Recent posts</Link>
        </Button>
      </div>
    </div>
  );
};
