import { useEffect, useState } from 'react';
import Error from "./error";
import Success from './success'

export default function Form({
  children, 
  method = 'POST', 
  apiRoute, 
  debug, 
  className, 
  overrideSubmitButton = false,
  handleResponse,
}){

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  useEffect(_ => {
    if(!handleResponse){
      return;
    }
    if(error || success){
      handleResponse(error || success)      
    }
  }, [error, success])

  return <form

    className={className || 'flex flex-col gap-2'}

    onSubmit={e => {
      e.preventDefault();

      const body = new FormData(e.target);
      if(debug){
        console.log(body);
      }

      fetch('/api/' + apiRoute, {
        credentials: 'include',
        method,
        body
      }).then(async res => {
        const json = await res.json()
        if(json.error){
          setError({code: res.status, message: json.error})
        } else {
          if(error){
            setError(null);
          }
          setSuccess({code: res.status, message: <>
            {Object.entries(json).map(([key, value], index) => {
              return <p key={index}>
                {key}: {JSON.stringify(value, null, ' ')}
              </p>
            })}
          </>})
        }
      })
    }}
  >

    {children}

    {error && !handleResponse && <Error errorCode={error.code} errorMessage={error.message} /> }
    {!error && success && !handleResponse && <Success successCode={success.code} successMessage={success.message} />}

    {!overrideSubmitButton && 
      <button 
        className='bg-brand_purple-100'
        type="submit"
      >submit</button>
    }
    
  </form>
}