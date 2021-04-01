import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Design System / Inputs / Button'
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  color: 'default',
  label: 'Default Button'
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  color: 'primary',
  label: 'Primary Button'
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  color: 'secondary',
  label: 'Secondary Button'
};
