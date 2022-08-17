import Input from '../../form/input'
import Form from '../../form/form';

export default function AuthForm({debug}){

  return <Form 
    method='POST'
    apiRoute='auth'
    debug={debug}
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