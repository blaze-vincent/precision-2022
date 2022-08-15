import { useState, useEffect } from 'react'

export default function Input({
  type = "text",
  name,
  labelText,
  valueSetter
}){

  const [val, setVal] = useState(null);
  useEffect(_ => {
    if(valueSetter){
      valueSetter(val);
    }
  }, [val])

  return <>
    <label htmlFor={name}>{
      labelText || name.charAt(0).toUpperCase() + name.slice(1)
    }</label>
    <input 
      type={type}
      name={name}
      onChange={e => { setVal(e.target.value) }}
    ></input>
  </>
}