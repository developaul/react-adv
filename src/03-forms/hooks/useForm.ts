import { ChangeEvent, useState } from "react"

export const useForm = <T>(initialValues: T) => {
  const [values, setValues] = useState(initialValues)

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValues(prev => ({
      ...prev,
      [target.name]: target.value
    }))
  }

  const onReset = () => setValues(initialValues)

  const isValidEmail = (email: string): boolean =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      .test(email)

  return {
    values,
    onReset,
    onChange,
    isValidEmail
  }
}