import { Input, Select, SelectItem } from '@nextui-org/react';

export const PostFilters = () => {
  const categories = [
    { value: 'dog', label: 'Dog' },
    { value: 'cat', label: 'Cat' },
    { value: 'hamster', label: 'Hamster' },
    { value: 'parrot', label: 'Parrot' },
    { value: 'spider', label: 'Spider' },
    { value: 'goldfish', label: 'Goldfish' },
  ];
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-row items-center gap-3 w-full justify-center">
        <div className="flex flex-wrap md:flex-nowrap gap-4 w-1/3 max-w-xs">
          <Input
            type="text"
            className="max-w-xs bg-primary-light text-primary-dark rounded-full w-full px-4"
            label="Search"
            color="primary"
            placeholder="Datastage error in load data"
          />
        </div>
        <Select
          label="Category"
          placeholder="Select an category"
          color="primary"
          className="max-w-xs bg-primary-light text-primary-dark rounded-full w-1/3 px-4"
        >
          {categories.map((category) => (
            <SelectItem
              key={category.value}
              value={category.value}
              className="text-primary-dark"
            >
              {category.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          label="Technology"
          placeholder="Select an technology"
          color="primary"
          className="max-w-xs bg-primary-light text-primary-dark rounded-full w-1/3 px-4"
        >
          {categories.map((category) => (
            <SelectItem
              key={category.value}
              value={category.value}
              className="text-primary-dark"
            >
              {category.label}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};
