export default function PillButton({styles = [], className = '', children}){

  const defaultStyle = 'rounded-full h-max w-max max-w-full px-2 py-px font-["Montserrat"] font-semibold transition-colors ';
  const stylePresets = {
    'large': 'text-4xl px-4',
    'med': 'text-2xl px-2',
    'border': 'border-solid border-2',
    'nav': 'border-brand_purple-600 bg-muted_white-100 text-brand_purple-600 hover:text-muted_white-100 hover:bg-brand_purple-600',
    'nav-2': 'bg-brand_purple-500 text-brand_purple-100 hover:text-brand_purple-500 hover:bg-brand_purple-100',
    'delete': 'border-pink-500 bg-white text-pink-500 hover:bg-pink-500 hover:text-white'
  }
  const addedStyles = styles.map(addedStyle => stylePresets[addedStyle]).join(' ')

  return <button 
    className={
      defaultStyle + addedStyles + className
    }
  >{
    children
  }</button>
}