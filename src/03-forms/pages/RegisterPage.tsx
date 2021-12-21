import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'

import '../styles/styles.css'

const initialState = {
  name: '',
  email: '',
  password1: '',
  password2: ''
}

export const RegisterPage = () => {

  const { values, onChange, onReset, isValidEmail } = useForm(initialState)
  const { name, email, password1, password2 } = values

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log({ values })
  }

  return (
    <div>
      <h1>Register Page</h1>

      <form
        onSubmit={onSubmit}
        noValidate>
        <input
          type="text"
          placeholder="Name"
          name='name'
          onChange={onChange}
          value={name}
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}

        <input
          type="email"
          placeholder="Email"
          name='email'
          onChange={onChange}
          value={email}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>Email no es válido</span>}

        <input
          type="password"
          placeholder="Password"
          name='password1'
          onChange={onChange}
          value={password1}
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener 6 caracteres</span>}

        <input
          type="password"
          placeholder="Repeat Password"
          name='password2'
          onChange={onChange}
          value={password2}
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas debe ser iguales</span>}

        <button type='submit'>
          Create
        </button>

        <button type='reset' onClick={onReset}>
          Reset Form
        </button>
      </form>
    </div>
  )
}
