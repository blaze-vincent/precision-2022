import Image from "next/image"
import Link from "next/link"
import ContactForm from "../contactForm/contactForm"

export default function Hero(){
  return <section
    className="w-full max-w-screen-2xl m-auto flex lg:flex-row gap-4 flex-col relative"
  >
    {/*leftside*/}
    <div
      className="bg-white w-full flex flex-col gap-4 h-max min-h-[30rem]"
    >
      <img 
        src='https://via.placeholder.com/300x150' 
        alt='' 
        className="w-max h-auto"  
      />
      <hgroup>
        <h2
          className="text-xl font-light"
        >
          Veniam et est sint aliquip eu laboris nisi enim sint.
        </h2>
        <h1
          className="text-4xl font-bold"
        >
          Sit anim irure est deserunt sit tempor labore.
        </h1>
      </hgroup>
      <div
        className="flex flex-col"
      >
        <p
          className="font-['Lora'] text-lg"
        >
          Nostrud labore consectetur ipsum aliqua ut ullamco consectetur consectetur. Eiusmod occaecat nisi duis ipsum ut dolore. Deserunt excepteur excepteur proident duis elit elit amet ullamco occaecat deserunt cillum. Ex cupidatat ut amet minim elit proident quis cupidatat.
        </p>
        <Link href='/about'>
          <a
            className="font-['Lora'] font-semibold underline w-max max-w-full"
          >
            Read more about us
          </a>
        </Link>
      </div>
    </div>

    {/*rightside*/}
    <div
      className="relative bg-brand_purple-100 w-full h-full min-h-[30rem] flex items-center justify-center"
    >
      {/*background image*/}
      <div
        className="min-h-[30rem] w-full h-full left-0 top-0 absolute"
      >
        <Image 
          src='/images/samplehouse.jpeg' 
          layout="fill"
          objectFit="cover"
        />
      </div>

      <ContactForm />
    </div>
  </section>
}