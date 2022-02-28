import Hero from "../components/hero/hero";

export default function Home() {
  return (
    <>
    <Hero />
      <div>
        {new Array(100).fill('').map((box, index) => <p key={index}>{index}</p>)}
      </div>
    </>
  )
}
