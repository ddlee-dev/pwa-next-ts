interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const ButtonComponent = ({ children, className = '', ...props }: ButtonProps) => {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default ButtonComponent;
