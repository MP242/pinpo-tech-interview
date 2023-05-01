import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../test-utils'; // Updated import statement
import Home from './Home';
import { useGetAllPosts } from '../../hooks/useGetAllPosts';

//simule le hook useGetAllPosts
jest.mock('../../hooks/useGetAllPosts', () => ({
  useGetAllPosts: jest.fn(),
}));

describe('Home Component', () => {
  beforeEach(() => {
    useGetAllPosts.mockReturnValue({
      allPosts: [
        {
          _id: 1,
          title: 'First Post',
          content: 'This is the first post',
          author: 'John Doe',
          createdAt: '2022-01-01T00:00:00.000Z',
        },
        {
          _id: 2,
          title: 'Second Post',
          content: 'This is the second post',
          author: 'Jane Smith',
          createdAt: '2022-02-01T00:00:00.000Z',
        },
      ],
      loading: false,
      error: null,
      getAllPosts: jest.fn(),
    });
  });

  //verifie si j'ai bien mon loading ...
  it('should render loading message when loading is true', () => {
    useGetAllPosts.mockReturnValue({ loading: true, getAllPosts: jest.fn() });
    renderWithRouter(<Home />);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
    expect(screen.getAllByText('.').length).toBe(3);
  });

//verifie si j'ai bien mon message d'erreur
  it('should render error message when there is an error', () => {
    useGetAllPosts.mockReturnValue({ error: { message: 'An error occurred.' }, getAllPosts: jest.fn() });
    renderWithRouter(<Home />);
    expect(screen.getByText('An error occurred.')).toBeInTheDocument();
  });

  //verifie si j'ai bien mes posts
  it('should render posts when allPosts is not empty', () => {
    renderWithRouter(<Home />);
    expect(screen.getAllByTestId('post')).toHaveLength(2);
  });
});
