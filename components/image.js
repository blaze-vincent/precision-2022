import Image from 'next/image'

export default function Img({src, description}){
  return <div className='w-80 h-40 flex flex-col'>
    <div className='relative w-full h-full'>
      <Image src={src} alt={description} layout='fill' objectFit='scale-down' />
    </div>
    <p
      className='text-sm font-light'
    >{description}</p>
  </div>
}