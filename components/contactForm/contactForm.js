import { useState } from 'react'
import Input from './input'

export default function ContactForm(){

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [zip, setZip] = useState('')
  const [message, setMessage] = useState('')

  return <form
    className='relative flex flex-col gap-2'
  >
    <Input 
      value={name} 
      type='text' 
      setter={setName} 
      label='Name: ' 
      name='name'
    />

    <Input 
      value={email} 
      type='email' 
      setter={setEmail} 
      label='Email: ' 
      name='email'
    />

    <Input 
      value={zip} 
      type='number' 
      setter={setZip} 
      label='Zip code: ' 
      name='zipcode'
    />

    <Input 
      value={message} 
      type='text' 
      setter={setMessage} 
      label='Message: ' 
      name='message'
    />

    <button>asdf</button>
  </form>
}