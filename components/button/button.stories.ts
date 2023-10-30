import { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonProps } from './button';

const meta: Meta<ButtonProps> = {
  title: 'Molecules/Button',
  component: Button,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
  },
};

export const Violet: StoryObj<ButtonProps> = {
  args: {
    className: 'theme-violet',
    children: 'Botão',
  },
};
