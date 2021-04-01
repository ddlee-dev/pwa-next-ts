import { render, screen } from '@testing-library/react';
import { PrimaryButton } from './Button.stories';

it('renders the button in the primary state', () => {
  render(<PrimaryButton {...PrimaryButton.args} />);
  expect(screen.getByRole('button')).toHaveTextContent('Primary');
});
