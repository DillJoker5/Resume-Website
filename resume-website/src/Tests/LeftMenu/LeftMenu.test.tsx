import React from 'react';
import { render } from '@testing-library/react';
import LeftMenu from '../../App/LeftMenu/LeftMenu';

test('Renders Left Menu', () => {
  const leftMenu = render(<LeftMenu />);
  expect(leftMenu).toExist();
});