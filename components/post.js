import Img from './image'

export default function Post({images, textContent}){
  return <div>
    <p>
      {textContent}
    </p>
    <div className='flex flex-col gap-2'>
      {
        images.map((image, index) => {
          return <Img key={index} src={image.url} description={image.description} />
        })
      }
    </div>
  </div>
}