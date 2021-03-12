import { Layout } from './Layout_Styled';

interface LayoutType {
  children: React.ReactNode;
}

const LayoutComponent = ({ children }: LayoutType) => {
  return <Layout>{children}</Layout>;
};

export default LayoutComponent;
