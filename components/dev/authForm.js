import Input from '../form/input'
import Form from '../form/form';

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