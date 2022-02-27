import PillButton from "../pillButton";
import Link from "next/link";

export default function Nav({collapsed}){
  return <nav
    className={`flex text-lg ${collapsed && 'flex-row-reverse items-baseline' || 'flex-col items-end'} gap-4`}
  >
    <PillButton styles={['border', 'nav', collapsed ? 'med' : 'large']}>Schedule Consultation</PillButton>
    <div
      className="flex flex-row gap-4 font-[Montserrat]"
    >
      <Link href='/'><a>Home</a></Link>
      <Link href='/'><a>About</a></Link>
      <Link href='/'><a>Services</a></Link>
      <Link href='/'><a>Gallery</a></Link>
    </div>
  </nav>
}