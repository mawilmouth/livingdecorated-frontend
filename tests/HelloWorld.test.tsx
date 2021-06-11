import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import HelloWorld from './HelloWorld';

describe('Component', () => {
  beforeAll(() => {
    render(
      <HelloWorld />
    )
  });

  afterAll(() => {
    cleanup();
  });

  it('renders hello world', () => {
    const container = screen.queryByTestId('testComponent') as HTMLElement;
    expect(container).toHaveTextContent('hello world');
  });
});

