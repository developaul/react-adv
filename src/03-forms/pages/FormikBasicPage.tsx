import { FormikErrors, useFormik } from 'formik'

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

export const FormikBasicPage = () => {

  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {}

    if (!firstName.trim())
      errors.firstName = 'Required'
    else if (firstName.length >= 15)
      errors.firstName = 'Must be 15 characters or less'

    if (!lastName.trim())
      errors.lastName = 'Required'
    else if (lastName.length >= 10)
      errors.lastName = 'Must be 10 characters or less'

    if (!email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }

    return errors
  }

  const formik = useFormik<FormValues>({
    initialValues,
    onSubmit: values => {
      console.log({ values })
    },
    validate
  })

  return (
    <div>
      <h1>Formik Basic</h1>

      <form
        onSubmit={formik.handleSubmit}
        noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          type='text'
          name='firstName'
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        {(formik.touched.firstName && formik.errors.firstName) && <span>{formik.errors.firstName}</span>}

        <label htmlFor="lastName">Last Name</label>
        <input
          type='text'
          name='lastName'
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
        {(formik.touched.lastName && formik.errors.lastName) && <span>{formik.errors.lastName}</span>}

        <label htmlFor="email">Email</label>
        <input
          type='email'
          name='email'
          onBlur={formik.handleBlur}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {(formik.touched.email && formik.errors.email) && <span>{formik.errors.email}</span>}

        <button type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}
