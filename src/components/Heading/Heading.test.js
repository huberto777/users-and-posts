// REACT TESTING LIBRARY
// testing-library.com

import React from 'react';
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import Heading from './Heading';

describe('Heading Component', () => {
  it('Renders children text', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Heading>Hello</Heading>
      </ThemeProvider>,
    );

    getByText('Hello');
  });
});

// describe() - element oplatający wszytkie inne testy
