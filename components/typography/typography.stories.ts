import { Meta, StoryObj } from '@storybook/react';

import { Typography, TypographyProps } from './typography';

const meta: Meta<TypographyProps> = {
  title: 'Atoms/Typography',
  component: Typography,
  argTypes: {
    className: {
      type: 'string',
    },
  },
};

export default meta;

export const Primary: StoryObj<TypographyProps> = {
  args: {
    children: 'Texto',
  },
};
