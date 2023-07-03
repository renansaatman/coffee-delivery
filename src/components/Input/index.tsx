import { FormInput } from "./styles";

interface FormInputProps {
  type: string
  placeholder: string
}
export function Input({ type, placeholder }: FormInputProps) {
  return (
    <FormInput 
      type={type}
      placeholder={placeholder}
    />
  )
}