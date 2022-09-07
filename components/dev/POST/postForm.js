import Form from '../../form/form';
import TextArea from '../../form/textarea';
import ImageInput from '../../form/imageInput';
import { useState } from 'react';

function Section({children, offset, className = ''}){
  return <div
    className={'w-full h-full absolute overflow-hidden ' + className}
    style={{
      left: `${offset*100}%`
    }}
  >
    {children}
  </div>
}

export default function PostForm(){

  const [imageUploads, setImageUploads] = useState([]);

  const sections = [
    <TextArea 
      labelText='Describe the job/project:'
      name="textContent"
    />,

    <ImageInput
      name="image"
      labelText="Images"
      multiple
      onChange={e => {
        setImageUploads(Array.from(e.target.files))
      }}
    />,

    ...imageUploads.map((file, index) => {
      return <div key={index}>
        <img src={URL.createObjectURL(file)} />
        <TextArea name={"description-" + file.name} labelText="Image description (optional):" />
      </div>
    })

  ]
  
  const [selectedSection, setSelectedSection] = useState(0);
  const selectSection = section => {
    if(section < 0 || section > sections.length){
      return;
    }
    setSelectedSection(section);
  }

  return <div className='overflow-hidden'>
    <Form 
      method='POST'
      apiRoute='post'
      className='flex flex-row w-full relative h-80'
      overrideSubmitButton
      handleResponse={res => {
        console.log(res)
      }}
    >
      <div 
        className='relative w-full h-full transition-transform'
        style={{
          transform: `translateX(-${selectedSection * 100}%)`
        }}
      >

        {sections.map((section, index) => {
            return <Section key={index} offset={index}>
              {section}
            </Section>
        })}

        <Section offset={sections.length}
          className='flex flex-col items-center justify-center'
        >
          <button 
            type="submit" 
            className='bg-brand_purple-500 p-4 text-white'  
          >
            Create Post
          </button>
        </Section>
      </div>
    </Form>

    <div className='flex flex-row justify-between'>
      {
        selectedSection > 0 && <button
          onClick={_ => {
            selectSection(selectedSection - 1);
          }}
        >back</button> || <div />
      }
      {
        selectedSection < sections.length &&
        <button
          onClick={_ => {
            selectSection(selectedSection + 1);
          }}
        >next</button> || <div />
      }
    </div>


  </div>
}