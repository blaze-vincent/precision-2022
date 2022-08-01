export default function Home() {
  return (
    <>
      <div>
        {new Array(100).fill('').map((box, index) => <p key={index}>{index}</p>)}
      </div>
    </>
  )
}
