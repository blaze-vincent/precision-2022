export default function Error({errorCode, errorMessage}){

  return <div>
    <div>Error {errorCode}</div>
    <div>{errorMessage}</div>
  </div>
}