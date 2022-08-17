import Input from '../../form/input'
import Form from '../../form/form';

export default function SignupForm({debug}){

  return <Form 
    method='POST'
    apiRoute='signup'  
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