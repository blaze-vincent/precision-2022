import PillButton from "../pillButton";
import Link from "next/link";

export default function Nav({collapsed}){
  return <nav
    className={`flex text-lg flex-row items-baseline gap-4`}
  >
    
    <Link href='/'><a>Home</a></Link>
    <Link href='/'><a>About</a></Link>
    <Link href='/'><a>Services</a></Link>
    <Link href='/'><a>Gallery</a></Link>
    
    <PillButton styles={['nav', collapsed ? 'med' : 'large']}>
      <Link href='/' passHref={true}>
        Get a Quote
      </Link>
    </PillButton>
    
  </nav>
}