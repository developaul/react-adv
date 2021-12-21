import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { MyCheckbox, MySelect, MyTextInput } from '../components'

import '../styles/styles.css'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  terms: false,
  jobType: ''
}

export const FormikAbstractation = () => {

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
          () => (
            <Form
              noValidate>
              <MyTextInput label='First Name' name='firstName' placeholder='Paul' />
              <MyTextInput label='Last Name' name='lastName' placeholder='Paul' />
              <MyTextInput label='Email Address' name='email' type='email' placeholder='paul@gmail.com' />

              <MySelect label='Job Type' name='jobType' as='select'>
                <option value="">Pick Something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-jr">IT Jr.</option>
              </MySelect>

              <MyCheckbox label='Terms & Conditions' name='terms' />

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
