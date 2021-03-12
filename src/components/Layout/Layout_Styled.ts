import styled from 'styled-components';

export const Layout = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.bg.primary};
  color: ${({ theme }) => theme.text.primary};

  /* Apply global styling to all descendents */
  * {
    background-color: ${({ theme }) => theme.bg.primary};
    color: ${({ theme }) => theme.text.primary};
    font-family: sans-serif;
  }
`;
