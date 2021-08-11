import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import PostDetail from './postdetail';

const post = {
  id: 1,
  title: 'Title',
  description: 'Description',
  image: 'string',
};

test('loads the post details component', async () => {
  render(
    <ThemeProvider theme={theme}>
      <PostDetail post={post} />
    </ThemeProvider>,
  );

  await waitFor(() => screen.getByText('Title'));

  expect(screen.getByText('Title')).toBeInTheDocument();
  expect(screen.getByText('Description')).toBeInTheDocument();
});
