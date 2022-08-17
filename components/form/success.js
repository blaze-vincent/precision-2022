export default function Success({successCode, successMessage}){

  return <div className="bg-green-200 p-2 border border-green-300">
    <b>Success {successCode}</b>
    <p>{successMessage}</p>
  </div>
}