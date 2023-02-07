import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../App/Home/Home';

test('Renders Home Page', () => {
  const homePage = render(<Home />);
  expect(homePage).toBeInTheDocument();
});
