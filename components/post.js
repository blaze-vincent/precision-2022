import Image from 'next/image'

export default function Post({images, description}){
    return <div>
        <div>
            {images.map((imgUrl, index) => {
                return <Image src={imgUrl} alt='' key={index} />
            })}
        </div>
    </div>
}