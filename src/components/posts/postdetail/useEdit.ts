import { UseMutateFunction, useMutation, useQueryClient } from 'react-query';
import { updatePost } from 'api';
import { AxiosResponse } from 'axios';
import { Post } from 'api/models';

interface EditResponse {
  savePost: UseMutateFunction<AxiosResponse<void>, unknown, Post, unknown>;
}

function useEditPost(): EditResponse {
  const queryClient = useQueryClient();
  const postMutation = useMutation(updatePost, {
    onMutate: async (updatedPost) => {
      await queryClient.cancelQueries('posts');
      const previousPosts = queryClient.getQueryData('posts');
      queryClient.setQueryData('posts', (old: Post[] | undefined) => (old
        ? old.map((post) => (post.id === updatedPost.id ? updatedPost : post))
        : []));

      return { previousPosts };
    },
    onError: (context: any) => {
      queryClient.setQueryData('posts', context.previousTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries('posts');
    },
  });
  return { savePost: postMutation.mutate };
}

export default useEditPost;
