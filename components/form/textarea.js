import { useState, useEffect, useRef } from 'react'

export default function TextArea({name, labelText}){
  
  const inputEl = useRef(null);
  const [value, setValue] = useState("");
  useEffect(_ => {
    const domEl = inputEl.current
    domEl.style.height = 'inherit';
    domEl.style.height = `${domEl.scrollHeight + 2}px`;
  }, [value])

  return <>
    <label 
      htmlFor={name}
      className='text-sm'  
    >{
      labelText || name.charAt(0).toUpperCase() + name.slice(1)
    }</label>
    <textarea 
      ref={inputEl}
      name={name}
      onChange={e => {
        setValue(e.target.value);
      }}
      style={{
        resize: "none"
      }}
      className="border border-brand_purple-100 outline-none p-2"
    />
  </>
}