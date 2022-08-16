export default function Input({
  type = "text",
  name,
  labelText,
}){

  return <>
    <label htmlFor={name}>{
      labelText || name.charAt(0).toUpperCase() + name.slice(1)
    }</label>
    <input 
      type={type}
      name={name}
      className="border border-brand_purple-100"
    ></input>
  </>
}