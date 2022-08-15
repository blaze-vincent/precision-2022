import Input from '../input'
import { useState } from 'react';
import Error from "../error";

export default function SignupForm(){

  const [error, setError] = useState(null)

  return <form

    id="signup-form"

    onSubmit={e => {
      e.preventDefault();

      const body = new FormData();
      Array.from(e.target.elements)
      .filter(el => el.name)
      .forEach(el => {
        body.append(el.name, el.value);
      })

      fetch('/api/signup', {
        credentials: 'include',
        method: 'POST',
        body
      }).then(async res => {
        const json = await res.json()
        if(json.error){
          setError({code: res.status, message: json.error})
        } else {
          if(error){
            setError(null);
          }
          
        }
      })
    }}
  >


    <Input 
      name="username" 
    />

    <Input 
      type="password"
      name="password" 
    />

    <button type="submit">submit</button>

    {error && <Error errorCode={error.code} errorMessage={error.message} /> }
  </form>
}