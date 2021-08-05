import axios, { AxiosResponse } from 'axios';
import { Post } from './models';

const url = 'http://127.0.0.1:3000';

const api = axios.create({ baseURL: url });

export const updatePost = ({
  id,
  ...updatedPost
}: Post): Promise<AxiosResponse<void>> => api.put(`/posts/${id}`, { id, ...updatedPost }).then((res) => res.data);

export const posts = async (): Promise<Post[]> => api.get('/posts').then((res) => res.data);

export const getPost = async (id: number): Promise<Post> => api.get(`/posts/${id}`).then((res) => res.data);
