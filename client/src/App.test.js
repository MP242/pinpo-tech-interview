import { renderWithRouter, screen } from './test-utils';
import App from './App';

test('renders learn react link', () => {
  renderWithRouter(<App />);
  const linkElement = screen.getByText(/Pinpo Blog/i);
  expect(linkElement).toBeInTheDocument();
});
