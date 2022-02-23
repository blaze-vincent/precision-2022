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
      className={`w-full ${offscreen && 'fixed -top-24 transition-transform'} ${animateOnscreen && 'translate-y-24'} bg-brand_purple-100 py-2 px-4 border-brand_purple-500 border-solid border-b-2`}
    >
      <div
        className="w-full max-w-screen-xl flex flex-row m-auto gap-2 items-end justify-between"
      >
        <img src='https://via.placeholder.com/300x150' width={offscreen && 100 || 300} height={offscreen && 50 || 150} alt='asdf' />
        <Nav collapsed={offscreen} />
      </div>
    </div>
  </header>)
}