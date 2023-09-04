import { Divider } from '@nextui-org/react';
import { ProfileHeader } from '../../../design-system/molecules/users/ProfileHeader';

const Profile = () => {
  return (
    <div className="h-full flex flex-col gap-4">
      <ProfileHeader />
      <div className="flex flex-col rounded-2xl shadow-md">
        <div className="flex flex-row justify-between px-6 py-6">
          <h2 className="text-2xl font-bold text-primary-dark">About</h2>
          <button className="text-primary-dark font-bold text-sm">Edit</button>
        </div>
        <Divider />
        <div className="grid grid-cols-2 items-center place-content-center">
          <div className="text-primary-dark text-sm px-6 py-6">Name</div>
          <div className="text-primary-dark text-sm px-6 py-6">Name</div>
          <div className="text-primary-dark text-sm px-6 py-6">Name</div>
          <div className="text-primary-dark text-sm px-6 py-6">Name</div>
          <div className="text-primary-dark text-sm px-6 py-6">Name</div>
          <div className="text-primary-dark text-sm px-6 py-6">Name</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
