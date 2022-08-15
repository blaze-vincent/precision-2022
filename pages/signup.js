import Input from "../components/input";
import { useState } from 'react';
import Error from "../components/error";

export default function Signup(){

  const [error, setError] = useState(null)

  return <form

    id="signup-form"

    onSubmit={e => {
      e.preventDefault();

      const responsesObj = {}

      Array.from(document.getElementById('signup-form').elements)
      .filter(el => el.name)
      .forEach(el => {
        responsesObj[el.name] = el.value
      })

      fetch('/api/signup', {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(responsesObj)
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