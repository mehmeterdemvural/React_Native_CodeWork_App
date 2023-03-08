import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';

import authErrorMessageParser from '../../utils/authErrorMessageParser';
import {styles} from './Signup.styles';
import {signupSchema} from './SignupValidations';

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

function Signup({navigation}) {
  const handleSignupSubmit = async values => {
    if (values.password !== values.confirmPassword) {
      showMessage({
        message: 'Passwords not match !',
        type: 'success',
        duration: 3000,
        floating: true,
        statusBarHeight: 50,
        backgroundColor: '#F5E9CF',
        titleStyle: {color: '#E96479'},
        textStyle: {color: '#4D455D'},
      });
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(
        values.email,
        values.password,
      );
      showMessage({
        message: 'User created',
        type: 'success',
        duration: 3000,
        floating: true,
        statusBarHeight: 50,
        backgroundColor: '#F5E9CF',
        titleStyle: {color: '#E96479'},
        textStyle: {color: '#4D455D'},
      });
      navigation.navigate('Signin');
    } catch (error) {
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'success',
        duration: 3000,
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
        onSubmit={handleSignupSubmit}
        validationSchema={signupSchema}>
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

            <View style={styles.inputContainer}>
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

            <View style={styles.inputContainer}>
              <View style={styles.inputLabelContainer}>
                <Text style={styles.inputLabel}>Confirm Password</Text>
                <Text style={styles.errorMessage}>
                  {touched.confirmPassword && errors.confirmPassword}
                </Text>
              </View>
              <TextInput
                placeholder="Please enter your password"
                placeholderTextColor={'#4D455D'}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                style={styles.input}
                secureTextEntry
              />
            </View>

            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}

export default Signup;
