import { Buttons } from './Buttons_Styled';

interface ButtonsProp {
  onClick?: () => void;
  themeType?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const defaultProps = {
  onClick: () => null,
  themeType: 'primary'
};

const ButtonsComponent = ({
  onClick,
  themeType,
  children
}: ButtonsProp & React.ComponentProps<'button'>) => {
  return (
    <Buttons type="button" themeType={themeType!} onClick={onClick}>
      {children}
    </Buttons>
  );
};

ButtonsComponent.defaultProps = defaultProps;

export default ButtonsComponent;
