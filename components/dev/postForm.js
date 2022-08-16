import Input from '../form/input'
import Form from '../form/form';
import TextArea from '../form/textarea';
import ImageInput from '../form/imageInput';

export default function PostForm({debug}){

  return <Form 
    method='POST'
    apiRoute='post'
    debug={debug}
  >
    <TextArea 
      name="textContent"
    />

    <ImageInput
      name="image"
      labelText="Images"
      multiple 
    />
  </Form>
}