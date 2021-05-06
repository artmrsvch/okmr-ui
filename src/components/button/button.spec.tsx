import React from 'react';

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

// 👇 Imports a specific story for the test
import { CutomizedButtonWithIcon } from './button.stories';

it('renders the button in the primary state', () => {
  render(<CutomizedButtonWithIcon>Открыть</CutomizedButtonWithIcon>);
  expect(screen.getByRole('button')).toHaveTextContent('Открыть');
});
