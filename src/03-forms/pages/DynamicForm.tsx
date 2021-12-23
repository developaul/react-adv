import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { MySelect, MyTextInput } from '../components'

import formJson from '../data/custom-form.json'

const initialValues: { [key: string]: any } = {}
const requiredFields: { [key: string]: any } = {}


for (const input of formJson) {
  initialValues[input.name] = input.value

  if (!input.validations?.length) continue

  let schema = Yup.string()

  for (const rule of input.validations) {
    if (rule.type === 'required')
      schema = schema.required('Este campo es requerido')
    if (rule.type === 'minLength')
      schema = schema.min(((rule as any).value || 2), `Minimo de ${(rule as any).value || 2} caracteres`)
    if (rule.type === 'email')
      schema = schema.email('Email invalido')
  }

  requiredFields[input.name] = schema
}

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicForm = () => {

  console.log("🚀 ~ formJson", formJson)

  return (
    <div>
      <h1>Dynamic Form</h1>

      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(value) => {
          console.log("🚀 ~ DynamicForm ~ value", value)
        }}
      >
        {(formik) => (
          <Form noValidate>
            {formJson.map(({ value, inputType, options, ...rest }) => {
              return (inputType === 'input') ? (
                <MyTextInput
                  key={rest.name}
                  {...rest}
                />
              ) : (
                <MySelect
                  key={rest.name}
                  {...rest}
                >
                  <option value='' >Select and option</option>
                  {options?.map(({ _id, label }) => (
                    <option key={_id} value={_id} >{label}</option>
                  ))}
                </MySelect>
              )
            })}
            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
