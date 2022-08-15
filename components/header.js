import Link from "next/link";

export default function Header(){

  return (<>
  
  {/* pre-header */}
  <div
    className='bg-brand_purple-600 text-brand_purple-100 font-medium text-center px-4'
  >
    <address
      className="flex flex-col lg:flex-row justify-between not-italic items-center max-w-screen-2xl m-auto"
    >
      <p>
        16912 145th St, West Burlington, IA 52655
      </p>

      <div className="flex sm:flex-row flex-col sm:gap-4 max-w-max">
        <a href="mailto:info@precisioncoatingsiowa.com">info@precisioncoatingsiowa.com</a>
        <a href="tel:3193924639">+1 &#40;319&#41; 392-4639</a>
      </div>
    </address>
  </div>


  <header
    className="p-4 bg-brand_purple-100 border-b-2 border-brand_purple-600"
  >
    <div className="max-w-screen-2xl m-auto flex sm:flex-row gap-4 flex-col justify-between items-center">
      <Link href="/">
        <a><img src='/images/precision.png' width={200} /></a>
      </Link>
      <div
        className="flex sm:flex-row flex-col sm:gap-4 gap-2 text-xl items-center"
      >
        <Link href="/"><a>Home</a></Link>
        <Link href="/gallery"><a>Gallery</a></Link>
        <Link href="/consult">
          <a
          className="rounded-full border-2 border-brand_purple-500 text-brand_purple-500 px-4 py-2 h-max text-2xl font-semibold bg-muted_white-100 min-w-max"
          >
            Free Consultation
          </a>
        </Link>
      </div>
      
    </div>
  </header>
  </>)
}