export default function Success({successCode, successMessage}){

  return <div className="bg-green-200">
    <div>Success {successCode}</div>
    <div>{successMessage}</div>
  </div>
}