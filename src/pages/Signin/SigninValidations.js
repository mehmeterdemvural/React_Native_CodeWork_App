import * as yup from 'yup';

const signinSchema = yup.object().shape({
  email: yup
    .string('email must be string !')
    .email('Invalid email !')
    .required('Email is required !'),
  password: yup
    .string('Password must be string !')
    .required('Password is required !'),
});

export {signinSchema};
