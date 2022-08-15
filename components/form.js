import { useState } from 'react';
import Error from "./error";
import Success from './success'

export default function Form({children, method = 'POST', apiRoute}){

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  return <form

    className='flex flex-col'

    onSubmit={e => {
      e.preventDefault();

      fetch('/api/' + apiRoute, {
        credentials: 'include',
        method,
        body: new FormData(e.target)
      }).then(async res => {
        const json = await res.json()
        if(json.error){
          setError({code: res.status, message: json.error})
        } else {
          if(error){
            setError(null);
          }
          setSuccess({code: res.status, message: json.id})
        }
      })
    }}
  >

    {children}

    {error && <Error errorCode={error.code} errorMessage={error.message} /> }
    {!error && success && <Success successCode={success.code} successMessage={success.message} />}

    <button 
      className='bg-brand_purple-100'
      type="submit"
    >submit</button>

  </form>
}