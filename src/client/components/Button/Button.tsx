import { FC } from 'react';

const theme: { [key: string]: string } = {
  default: 'border-gray-300 bg-gray-200 hover:bg-white-700 text-gray-800',
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-red-600 hover:bg-red-700 text-white'
};

export interface ButtonProps {
  color?: 'default' | 'primary' | 'secondary';
  label: string;
}

export const Button: FC<ButtonProps> = ({ color = 'default', label, ...props }) => {
  return (
    <button {...props} className={`shadow border font-normal py-2 px-4 rounded-md ${theme[color]}`}>
      {label}
    </button>
  );
};
