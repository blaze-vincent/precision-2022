export default function Admin(){
  return <div>
    <ul className="flex flex-col gap-2 my-4 underline text-xl">
      <li>
        <a href="/admin/posts">Posts</a>
      </li>
      <li>
        <a href="/admin/consultations">Consultation Requests</a>
      </li>
    </ul>
  </div>
}