import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  localStorage.clear();
});

test('saves todos to localStorage and restores them on mount', () => {
  const { unmount } = render(<App />);

  fireEvent.change(screen.getByPlaceholderText('Title'), {
    target: { value: 'Buy groceries' },
  });
  fireEvent.change(screen.getByPlaceholderText('Description'), {
    target: { value: 'Milk and bread' },
  });
  fireEvent.click(screen.getByRole('button', { name: 'Add Todo' }));

  expect(JSON.parse(localStorage.getItem('todos'))).toEqual([
    expect.objectContaining({
      title: 'Buy groceries',
      description: 'Milk and bread',
      completed: false,
    }),
  ]);

  unmount();
  render(<App />);

  expect(screen.getByText('Buy groceries')).toBeTruthy();
  expect(screen.getByText('Milk and bread')).toBeTruthy();
});
