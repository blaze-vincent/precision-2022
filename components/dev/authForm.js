import Input from '../input'
import Form from '../form';

export default function AuthForm(){

  return <Form 
    method='POST'
    apiRoute='auth'  
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