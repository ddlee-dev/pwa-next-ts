import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Design System / Inputs / Button',
  argTypes: {
    variant: {
      options: ['default', 'primary', 'secondary']
    },
    onClick: { action: 'clicked' }
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  variant: 'default',
  label: 'Default Button'
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  variant: 'primary',
  label: 'Primary Button'
};
PrimaryButton.parameters = {
  docs: {
    description: {
      story: 'Primary Button description here.'
    }
  }
};

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  variant: 'secondary',
  label: 'Secondary Button'
};
SecondaryButton.parameters = {
  docs: {
    description: {
      story: 'Seconary Button description here.'
    }
  }
};
