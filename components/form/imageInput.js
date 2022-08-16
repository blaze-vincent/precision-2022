export default function ImageInput({name, multiple = false, labelText}){
  return <>
    <label htmlFor={name}>{
      labelText || name.charAt(0).toUpperCase() + name.slice(1)
    }</label>
    <input
      type="file"
      name={name}
      accept="image/*"
      multiple={multiple}
    />
  </>
}