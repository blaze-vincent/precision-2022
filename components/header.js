import Link from "next/link";

export default function Header(){

  return (<header
    className='w-full px-4 py-2 fixed z-10 shadow-sm bg-white shadow-brand_purple-100'
  >
    <div className="w-full absolute left-0 top-0 h-full z-10" />

    <div
      className="flex flex-row justify-between gap-4 items-center w-full max-w-screen-2xl m-auto"
    >
    <img 
        src='https://via.placeholder.com/100x50' 
        alt='' 
    />
      <nav
        className="relative flex flex-row gap-8 text-lg w-max max-w-full items-center z-50"
      >
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/services'>
          <a>Services</a>
        </Link>
        <Link href='/gallery'>
          <a>Gallery</a>
        </Link>
      </nav>
    </div>
  </header>)
}