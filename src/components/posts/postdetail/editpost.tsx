import { updatePost } from 'api';
import { Post } from 'api/models';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import Button from 'components/buttton';
import { Form, Input } from './editpost.styled';

interface EditPostProps {
  post: Post;
  onSave: () => void;
}

function EditPost({ post, onSave }: EditPostProps): JSX.Element {
  const [formData, setFormData] = useState(post);
  const queryClient = useQueryClient();
  const postMutation = useMutation(updatePost, {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  function saveChanges() {
    postMutation.mutate(formData);
    onSave();
  }

  return (
    <Form>
      <Input
        type="text"
        value={formData.title}
        onChange={(e) => setFormData((data) => ({ ...data, title: e.target.value }))}
      />
      <Input
        type="text"
        value={formData.description}
        onChange={(e) => setFormData((data) => ({ ...data, description: e.target.value }))}
      />
      <Button onClick={saveChanges}>Save changes</Button>
    </Form>
  );
}
export default EditPost;
