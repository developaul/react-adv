import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as Yup from 'yup'

import '../styles/styles.css'

const initialValues = {
  name: '',
  email: '',
  password1: '',
  password2: ''
}

const validationSchema = Yup.object({
  name: Yup
    .string()
    .required('Required')
    .min(2, 'min 2 characters')
    .max(15, 'max 15 characters'),
  email: Yup
    .string()
    .required('Required')
    .email('Debe ser un email valido'),
  password1: Yup
    .string()
    .required('Required')
    .min(6, 'min 6 characters'),
  password2: Yup
    .string()
    .equals([Yup.ref('password1')], 'invalid password')
    .required('Required')
})

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log({ values })
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form
            onSubmit={formik.handleSubmit}
            noValidate>
            <Field placeholder='Name' type='text' name='name' />
            <ErrorMessage name='name' component='span' />

            <Field placeholder='Email' type='email' name='email' />
            <ErrorMessage name='email' component='span' />

            <Field placeholder='Password' type='password' name='password1' />
            <ErrorMessage name='password1' component='span' />

            <Field placeholder='Password' type='password' name='password2' />
            <ErrorMessage name='password2' component='span' />

            <button type='submit'>
              Create
            </button>

            <button type='reset'>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div >
  )
}
