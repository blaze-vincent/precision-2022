import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Nav from "./nav";

export default function Header(){

  const containerEl = useRef(null)
  const [offscreen, setOffscreen] = useState(false)
  const [animateOnscreen, setAnimateOnscreen] = useState(false)

  useEffect(_ => {
    setAnimateOnscreen(offscreen)
  }, [offscreen])

  useEffect(_ => {
    const intersectionObserver = new IntersectionObserver(([container]) => {
      setOffscreen(container.intersectionRatio === 0)
    }, {
      root: document.getElementById('body'),
      threshold: 0.0,
      rootMargin: '200px'
    }, [])

    intersectionObserver.observe(containerEl.current)
    return (_ => {
      intersectionObserver.disconnect()
    })

  })

  return (<header
    ref={containerEl}
    className="bg-brand_purple-100 flex items-center justify-center"
  >
    <div
      className={`w-full ${offscreen && 'fixed -top-24 transition-transform'} ${animateOnscreen && 'translate-y-24'} bg-muted_white-100 py-2 px-4 shadow-sm shadow-brand_purple-100`}
    >
      <div
        className="w-full max-w-screen-xl flex flex-row m-auto gap-2 items-end justify-between"
      >
        <Image src='/images/precision.png' width={offscreen && 100 || 200} height={offscreen && 50 || 100} alt='' layout='intrinsic' />
        <Nav collapsed={offscreen} />
      </div>
    </div>
  </header>)
}