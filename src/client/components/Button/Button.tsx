interface ButtonProps {
  children: React.ReactNode;
}

const ButtonComponent = ({ children, ...props }: ButtonProps) => {
  return <button>{children}</button>;
};

export default ButtonComponent;
