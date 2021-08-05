import axios, { AxiosResponse } from 'axios';
import { Post } from './models';

const url = 'http://127.0.0.1:3000';

const api = axios.create({ baseURL: url });

export const updatePost = ({
  id,
  ...updatedPost
}: Post): Promise<AxiosResponse<void>> => api.put(`/posts/${id}`, { id, ...updatedPost }).then((res) => res.data);

export const posts = async (): Promise<Post[]> => (await fetch(`${url}/posts`)).json() as Promise<Post[]>;

export const getPost = (id: number) => async (): Promise<Post> => (await fetch(`${url}/posts/${id}`)).json() as Promise<Post>;

export const changePost = async ({
  id,
  ...formData
}: Post): Promise<Response> => fetch(`${url}/posts/${id}`, {
  method: 'PUT',
  body: JSON.stringify({ id, ...formData }),
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
