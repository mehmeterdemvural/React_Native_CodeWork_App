export default function (errorCode) {
  switch (errorCode) {
    case 'auth/email-already-exists':
      return 'The user already exists !';
    case 'auth/user-not-found':
      return 'The user not found !';
    case 'auth/invalid-email':
      return 'Invalid email adress !';
    case 'auth/wrong-password':
      return 'Password is wrong !';
    default:
      return errorCode;
  }
}
