import Form from '../form/form';
import TextArea from '../form/textarea';
import ImageInput from '../form/imageInput';
import Input from '../form/input';
import { useState } from 'react';

export default function PostForm({debug}){

  //todo: enable the creation of descriptions for each image
  const [imageUploads, setImageUploads] = useState([]);

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
      onChange={e => {
        setImageUploads(Array.from(e.target.files))
      }}
    />

    {imageUploads.map(file => {
      return <div>
        <img src={URL.createObjectURL(file)} />
        <TextArea name={"description-" + file.name} labelText="Image description (optional):" />
      </div>
    })}
  </Form>
}