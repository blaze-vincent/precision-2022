export default function Input({value, type, setter, label, name}){
  return <div className='flex flex-col w-full min-h-max font-medium'>
    <label
      htmlFor={name}
      className="text-white w-max max-w-full flex flex-row items-center justify-center"
    >
      {label}
    </label>
    
    <input
      className="px-2 flex flex-row items-center justify-center text-brand_purple-900 font-medium"
      type={type}
      value={value}
      onChange={e => setter(e.target.value)}
      name={name}
    />
  </div>
}