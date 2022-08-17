import { useState } from 'react';
import Error from "./error";
import Success from './success'

export default function Form({children, method = 'POST', apiRoute, debug}){

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  return <form

    className='flex flex-col gap-2'

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
          setSuccess({code: res.status, message: <div>
            {Object.entries(json).map((entry, index) => {
              return <p key={index}>
                {entry.key}: {entry.value}
              </p>
            })}
          </div>})
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