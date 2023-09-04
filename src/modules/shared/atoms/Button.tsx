import { ButtonProps } from './ButtonProps';

export const Button = ({
  variant = 'primary',
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`px-8 py-2 w-full 
            ${
              variant == 'primary'
                ? 'bg-secondary'
                : 'bg-primary-light text-primary-dark'
            }
         text-lg rounded-2xl text-white mt-12`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
