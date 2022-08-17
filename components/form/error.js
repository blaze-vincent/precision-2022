export default function Error({errorCode, errorMessage}){

  return <div className="bg-red-200 p-2 border border-red-300">
    <b>Error {errorCode}</b>
    <p>{errorMessage}</p>
  </div>
}