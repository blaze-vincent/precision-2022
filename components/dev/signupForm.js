import Input from '../input'
import Form from '../form';

export default function SignupForm(){

  return <Form 
    method='POST'
    apiRoute='signup'  
  >
    <Input 
      name="username" 
    />

    <Input 
      type="password"
      name="password" 
    />
  </Form>
}