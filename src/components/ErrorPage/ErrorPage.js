import React from 'react';
import Lottie from 'lottie-react-native';

function ErrorPage() {
  return <Lottie source={require('../../assets/error.json')} autoPlay loop />;
}

export default ErrorPage;
