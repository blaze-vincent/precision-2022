import SignupForm from '../components/dev/signupForm';
import AuthForm from '../components/dev/authForm';

function Section({children}){
  return <div
    className='border border-solid border-brand_purple-500 p-4 w-80 rounded'
  >
    {children}
  </div>
}

export default function Dev(){
  return <div
    className="flex flex-col gap-8 items-start"
  >
    <h1>developer portal</h1>

    <Section>
      <h2>signup</h2>
      <SignupForm />
    </Section>

    <Section>
      <h2>auth</h2>
      <AuthForm />
    </Section>

  </div>
}