import { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonProps } from './button';

const meta: Meta<ButtonProps> = {
  title: 'Design System/Molecules/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
    },
    disabled: {
      type: 'boolean',
    },
    className: {
      type: 'string',
    },
    onClick: { action: 'clicked' },
  },
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
    disabled: true,
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
    variant: 'secondary',
  },
};

export const SecondaryDisabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
    variant: 'secondary',
    disabled: true,
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
    variant: 'tertiary',
  },
};

export const TertiaryDisabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Botão',
    variant: 'tertiary',
    disabled: true,
  },
};

export const Violet: StoryObj<ButtonProps> = {
  args: {
    className: 'theme-violet',
    children: 'Botão',
  },
};

export const VioletSecondary: StoryObj<ButtonProps> = {
  args: {
    className: 'theme-violet',
    variant: 'secondary',
    children: 'Botão',
  },
};

export const VioletTertiary: StoryObj<ButtonProps> = {
  args: {
    className: 'theme-violet',
    variant: 'tertiary',
    children: 'Botão',
  },
};
