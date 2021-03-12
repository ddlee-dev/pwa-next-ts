interface FooterProps {
  children: React.ReactNode;
}

const FooterComponent = ({ children }: FooterProps) => {
  return <footer>{children}</footer>;
};

export default FooterComponent;
