import { render, screen, waitForElementToBeRemoved, fireEvent } from '@testing-library/react';
import { Task2 } from 'components/task-2';
import Pagination from 'rc-pagination';

beforeEach(() => {
  render(<Task2 />);
});

test('should show loading once it is opened', () => {
  const isLoading = screen.getByTestId('is-loading');
  expect(isLoading).toBeInTheDocument();
});

test('loading should disappear once after some time', () => {
  const isLoading = screen.getByTestId('is-loading');
  waitForElementToBeRemoved(isLoading).then(async () => {
    expect(isLoading).not.toBeInTheDocument();
  });
});

test('loading pagination', () => {
  const pagination = render(
    <Pagination
      onChange={() => null}
      pageSize={20}
      total={100}
      hideOnSinglePage
      showPrevNextJumpers
      current={1}
    />,
  );

  expect(pagination.getByText('1').parentElement?.parentElement?.childElementCount).toBe(8);
});

test('check if clicked on page 2 in  pagination', async () => {
  const pagination = render(
    <Pagination
      onChange={() => null}
      pageSize={20}
      total={100}
      hideOnSinglePage
      showPrevNextJumpers
      current={1}
    />,
  );

  fireEvent.click(screen.getByText('2'));
  setTimeout(() => {
    expect(pagination.getByText('2').parentElement?.className).toBe(
      'rc-pagination-item rc-pagination-item-2 rc-pagination-item-active',
    );
  }, 9000);
});
