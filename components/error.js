export default function Error({errorCode, errorMessage}){

  return <div className="bg-red-200">
    <div>Error {errorCode}</div>
    <div>{errorMessage}</div>
  </div>
}