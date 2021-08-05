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
    onSuccess: () => {
      queryClient.invalidateQueries('posts');
    },
  });
  return { savePost: postMutation.mutate };
}

export default useEditPost;
