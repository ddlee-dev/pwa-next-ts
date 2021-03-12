import styled from 'styled-components';

type ButtonsProps = {
  themeType: 'primary' | 'secondary';
};

export const Buttons = styled.button<ButtonsProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background-color: ${({ theme, themeType }) => theme.bg[themeType]};
  color: ${({ theme, themeType }) => theme.text[themeType]};
  font-size: ${({ theme }) => theme.fontSizes.body};
  border-radius: ${({ theme }) => theme.borderRadius};
  border-color: ${({ theme }) => theme.borderColor};
  border-width: 2px;
  border-style: solid;
  padding: ${({ theme }) => theme.padding.button};
  margin: 5px;
  min-height: 30px;
  width: auto;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;

  :focus {
    border-style: solid;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
