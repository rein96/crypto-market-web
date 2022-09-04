import { render } from '@testing-library/react';
import React from 'react';
import ArrowDown from './ArrowDown';

it('render ArrowDown with custom color', () => {
  const color = 'rgb(255, 90, 90)';
  const { container } = render(<ArrowDown color={color} />);
  expect(container.firstChild).toHaveStyle(
    `border-color: ${color} transparent transparent`
  );
});
