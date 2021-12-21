import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  terms: false,
  jobType: ''
}

export const FormikComponents = () => {

  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Requerido'),
          lastName: Yup.string()
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Requerido'),
          email: Yup.string()
            .required('Requerido')
            .email('Debe de ser un email valido'),
          terms: Yup.boolean()
            .isTrue()
            .required('Debe de aceptar las condiciones'),
          jobType: Yup.string()
            .required('Requerido')
            .notOneOf(['it-jr'], 'Esta opcion no es permitida')
        })}
        onSubmit={values => {
          console.log({ values })
        }}
        initialValues={initialValues}
      >
        {
          formik => (
            <Form
              noValidate>
              <label htmlFor="firstName">First Name</label>
              <Field name='firstName' type='text' />
              <ErrorMessage name='firstName' component='span' />

              <label htmlFor="lastName">Last Name</label>
              <Field name='lastName' type='text' />
              <ErrorMessage name='lastName' component='span' />

              <label htmlFor="email">Email</label>
              <Field name='email' type='text' />
              <ErrorMessage name='email' component='span' />

              <label htmlFor="jobType">Job Type</label>
              <Field name='jobType' as='select'>
                <option value="">Pick Something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-jr">IT Jr.</option>
              </Field>
              <ErrorMessage name='jobType' component='span' />

              <label htmlFor="terms">
                <Field id='terms' name='terms' type='checkbox' />
                Terms and conditions
              </label>
              <ErrorMessage name='terms' component='span' />

              <button type='submit'>
                Submit
              </button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
