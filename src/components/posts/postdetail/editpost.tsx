import { Post } from 'api/models';
import { useState } from 'react';
import Button from 'components/buttton';
import { Form, Input, TextArea } from './editpost.styled';
import useEditPost from './useEdit';

interface EditPostProps {
  post: Post;
  onSave: () => void;
}

function EditPost({ post, onSave }: EditPostProps): JSX.Element {
  const [formData, setFormData] = useState(post);
  const { savePost } = useEditPost();

  function saveClickHandler() {
    savePost(formData);
    onSave();
  }

  return (
    <Form>
      <Input
        type="text"
        value={formData.title}
        onChange={(e) => setFormData((data) => ({ ...data, title: e.target.value }))}
      />
      <TextArea
        value={formData.description}
        onChange={(e) => setFormData((data) => ({ ...data, description: e.target.value }))}
      />

      <Button onClick={saveClickHandler}>Save changes</Button>
    </Form>
  );
}
export default EditPost;
