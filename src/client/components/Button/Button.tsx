const theme: { [key: string]: string } = {
  default: 'border-gray-300 bg-gray-200 hover:bg-gray-300 hover:shadow-md text-gray-800',
  primary: 'bg-blue-600 hover:bg-blue-700 hover:shadow-md text-white',
  secondary: 'bg-red-600 hover:bg-red-700 hover:shadow-md text-white'
};

export interface ButtonProps {
  variant?: 'default' | 'primary' | 'secondary';
  label: string;
}

export const Button = ({ variant = 'default', label, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`shadow border font-normal py-2 px-4 rounded-md ${theme[variant]}`}>
      {label}
    </button>
  );
};
