import {
    render,
    screen,
    waitForElementToBeRemoved,
  } from '@testing-library/react';
  import { Task1 } from 'components/task-1';
  
  beforeEach(() => {
    render(<Task1 />);
  });
  
  test('should show loading once it is opened', () => {
    const isLoading = screen.getByText('Loading...');
    expect(isLoading).toBeInTheDocument();
  });
  
  test('loading should disappear once after some time', () => {
    const isLoading = screen.getByText('Loading...');
    waitForElementToBeRemoved(isLoading).then(async () => {
      expect(isLoading).not.toBeInTheDocument();
    });
  });
  