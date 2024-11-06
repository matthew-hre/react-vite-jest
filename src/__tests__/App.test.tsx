import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from '../App';

test('Renders main page correctly', async () => {
  render(<App />);
  const buttonCount = await screen.findByRole('button');

  expect(buttonCount).toHaveTextContent('count is 0');

  await user.click(buttonCount);
  await user.click(buttonCount);

  expect(buttonCount).toHaveTextContent('count is 2');
  expect(screen.queryByText(/count is/)).toBeInTheDocument();
});

