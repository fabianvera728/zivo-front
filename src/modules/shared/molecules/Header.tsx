import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import {
  GitBranch,
  Group,
  List,
  NavArrowDown,
  Okrs,
  Plus,
} from 'iconoir-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex flex-row justify-between w-full px-48 py-8">
      <div className="flex flex-row gap-3 items-center">
        <img src="src/assets/images/dark_logo.png" className="w-16" />
        <Button
          variant="light"
          className="text-primary-dark font-bold text-lg ml-8"
        >
          <Link to="/home">Home</Link>
        </Button>
        <Button variant="light" className="text-primary-dark font-bold text-lg">
          <Link to="/about">About</Link>
        </Button>
        <Dropdown className="bg-primary-light">
          <DropdownTrigger>
            <Button
              variant="light"
              className="text-primary-dark font-bold text-lg"
              endContent={
                <div>
                  <NavArrowDown />
                </div>
              }
            >
              Posts
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            variant="light"
            aria-label="Dropdown menu with description"
          >
            <DropdownItem
              key="new"
              description="Create a post"
              startContent={<Plus />}
            >
              Create post
            </DropdownItem>
            <DropdownItem
              key="copy"
              description="My posts"
              startContent={<List />}
            >
              My posts
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown className="bg-primary-light">
          <DropdownTrigger>
            <Button
              variant="light"
              className="text-primary-dark font-bold text-lg"
              endContent={<NavArrowDown />}
            >
              Users
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            variant="light"
            aria-label="Dropdown menu with description"
          >
            <DropdownItem
              key="new"
              description="Add a new user"
              startContent={<Group />}
            >
              Add users
            </DropdownItem>
            <DropdownItem
              key="copy"
              description="List of all users"
              startContent={<List />}
            >
              All users
            </DropdownItem>
            <DropdownItem
              key="edit"
              description="Company positions"
              startContent={<Okrs />}
            >
              Company positions
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown className="bg-primary-light">
          <DropdownTrigger>
            <Button
              variant="light"
              className="text-primary-dark font-bold text-lg"
              endContent={
                <div>
                  <NavArrowDown />
                </div>
              }
            >
              Dashboard
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            variant="light"
            aria-label="Dropdown menu with description"
          >
            <DropdownItem
              key="new"
              description="List of users"
              startContent={<Group />}
            >
              Users
            </DropdownItem>
            <DropdownItem
              key="copy"
              description="Posts"
              textValue="Posts"
              startContent={<List />}
            >
              <Link to="/admin/my-posts">Posts</Link>
            </DropdownItem>
            <DropdownItem
              key="edit"
              description="Tecnologies"
              startContent={<GitBranch />}
              textValue="Technologies"
            >
              <Link to="/admin/technologies">Technologies</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="flex flex-row items-center gap-2">
        <img
          src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
          className="w-12 h-12 rounded-full"
        />
        <span className="text-primary-dark font-bold text-lg">Silvia R.</span>
      </div>
    </div>
  );
};

export default Header;
