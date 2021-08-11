import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import theme from 'styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import Post from './index';

const server = setupServer(
  rest.get('http://127.0.0.1:3000/posts/1', (req, res, ctx) => res(
    ctx.json({
      id: 1,
      title: 'Title',
      description: 'Description',
      image: 'string',
    }),
  )),
);

const queryClient = new QueryClient();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('loads the post component', async () => {
  render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Post postId={1} />
      </ThemeProvider>
    </QueryClientProvider>,
  );

  await waitFor(() => screen.getByText('Title'));

  expect(screen.getByText('Title')).toBeInTheDocument();
  expect(screen.getByText('Description')).toBeInTheDocument();
});
