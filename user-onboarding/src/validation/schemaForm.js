import * as yup from 'yup';

const schemaForm = yup.object().shape({
    first_name: yup
      .string()
      .trim()
      .required('First Name is required'),
    last_name: yup
      .string()
      .trim()
      .required('Last Name is required'),
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('Email is a required field'),
    terms: yup
    .boolean()
    .required('You must accept our terms of service')
  })
  
  export default schemaForm;