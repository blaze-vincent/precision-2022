import Image from 'next/image'

export default function Img({src, description}){
    return <div className='relative w-80 h-40'>
        <Image src={src} alt='' layout='fill' objectFit='scale-down' />
        <p>{description}</p>
    </div>
}