import Layout from '@components/Layout/Layout';
import Buttons from '@components/Buttons/Buttons';

type HomeProps = {
  updateTheme: () => void;
};

const Home = ({ updateTheme }: HomeProps) => {
  return (
    <Layout>
      <div>Hello</div>
      <h3>Hola</h3>
      <Buttons onClick={() => updateTheme()}>Click Me</Buttons>
    </Layout>
  );
};

export default Home;
