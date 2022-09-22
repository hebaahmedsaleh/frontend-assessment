import {render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { Task2 } from 'components/task-2';

beforeEach(() => {
    render(<Task2 />);
  })

test('should show loading once it is opened', () => {
    const isLoading = screen.getByTestId('is-loading');
    expect(isLoading).toBeInTheDocument();
    
});

test('loading should disappear once after some time', () => {
    const isLoading = screen.getByTestId('is-loading');
    waitForElementToBeRemoved(isLoading).then(() =>
    expect(isLoading).not.toBeInTheDocument(),
    );
  });