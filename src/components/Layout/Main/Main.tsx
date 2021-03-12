interface MainProps {
  children: React.ReactNode;
}

const MainComponent = ({ children }: MainProps) => {
  return <main>{children}</main>;
};

export default MainComponent;
