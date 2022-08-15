import SignupForm from '../components/dev/signupForm';


export default function Dev(){

  return <div
    className="flex flex-col gap-4"
  >
    <h1>developer portal</h1>

    <div>
      <h2>signup</h2>
      <SignupForm />
    </div>
  </div>
}