import { useFormik } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'

interface FormValues {
  firstName: string,
  lastName: string,
  email: string,
}

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
}

export const FormikYupPage = () => {

  const formik = useFormik<FormValues>({
    initialValues,
    onSubmit: values => {
      console.log({ values })
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Debe de tener 15 caracteres o menos')
        .required('Requerido'),
      lastName: Yup.string()
        .max(15, 'Debe de tener 15 caracteres o menos')
        .required('Requerido'),
      email: Yup.string()
        .required('Requerido')
        .email('Debe de ser un email valido')
    })
  })

  return (
    <div>
      <h1>Formik Yup</h1>

      <form
        onSubmit={formik.handleSubmit}
        noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type='text' {...formik.getFieldProps('firstName')} />
        {(formik.touched.firstName && formik.errors.firstName) && <span>{formik.errors.firstName}</span>}

        <label htmlFor="lastName">Last Name</label>
        <input type='text' {...formik.getFieldProps('lastName')} />
        {(formik.touched.lastName && formik.errors.lastName) && <span>{formik.errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input type='email' {...formik.getFieldProps('email')} />
        {(formik.touched.email && formik.errors.email) && <span>{formik.errors.email}</span>}

        <button type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}
