import * as yup from 'yup';

const signupSchema = yup.object().shape({
  email: yup
    .string('email must be string !')
    .email('Invalid email !')
    .required('Email is required !'),
  password: yup
    .string('Password must be string !')
    .required('Password is required !'),
  confirmPassword: yup
    .string()
    .required('Confirm password is required !')
    .oneOf([yup.ref('password')], 'Passwords must match !'),
});

export {signupSchema};
