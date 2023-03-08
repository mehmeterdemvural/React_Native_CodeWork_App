import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

import authErrorMessageParser from '../../utils/authErrorMessageParser';
import {styles} from './Signin.styles';
import {signinSchema} from './SigninValidations';

const initialValues = {
  email: '',
  password: '',
};

function Signin() {
  const handleSigninSubmit = async values => {
    try {
      await auth().signInWithEmailAndPassword(values.email, values.password);
    } catch (error) {
      showMessage({
        message: 'ERROR',
        description: authErrorMessageParser(error.code),
        type: 'success',
        duration: 5000,
        floating: true,
        statusBarHeight: 50,
        backgroundColor: '#F5E9CF',
        titleStyle: {color: '#E96479'},
        textStyle: {color: '#4D455D'},
      });
      console.log(error.code);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSigninSubmit}
        validationSchema={signinSchema}>
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <>
            <View style={styles.inputContainer}>
              <View style={styles.inputLabelContainer}>
                <Text style={styles.inputLabel}>Email</Text>
                <Text style={styles.errorMessage}>
                  {touched.email && errors.email}
                </Text>
              </View>
              <TextInput
                placeholder="Please enter your email"
                placeholderTextColor={'#4D455D'}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={styles.input}
              />
            </View>

            <View>
              <View style={styles.inputLabelContainer}>
                <Text style={styles.inputLabel}>Password</Text>
                <Text style={styles.errorMessage}>
                  {touched.password && errors.password}
                </Text>
              </View>
              <TextInput
                placeholder="Please enter your password"
                placeholderTextColor={'#4D455D'}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={styles.input}
                secureTextEntry
              />
            </View>

            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}

export default Signin;
