interface MenuBarProps {
  children: React.ReactNode;
}

const MenuBarComponent = ({ children }: MenuBarProps) => {
  return <div>{children}</div>;
};

export default MenuBarComponent;
