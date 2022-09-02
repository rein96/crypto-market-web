import { render } from '@testing-library/react';
import React from 'react';
import ArrowUp from './ArrowUp';

it('render ArrowUp with custom color', () => {
  const color = 'rgb(28, 203, 33)';
  const { container } = render(<ArrowUp color={color} />);
  expect(container.firstChild).toHaveStyle(
    `border-color: transparent transparent ${color}`
  );
});
