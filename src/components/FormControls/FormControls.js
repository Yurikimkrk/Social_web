import s from './FormControls.module.css'

const FormControl = ({input, meta, child, className, ...props}) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={className}>
      {props.children}
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Textarea = (props) => {
  const {input,meta,child,...rProps} = props
  return <FormControl {...props}><textarea {...input}{...rProps}/></FormControl>
  }

export const Input = (props) => {
  const {input,meta,child,...rProps} = props
  return <FormControl {...props}><input {...input}{...rProps}/></FormControl>
  }