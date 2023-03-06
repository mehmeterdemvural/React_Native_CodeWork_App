import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Formik} from 'formik';

import {styles} from './Signin.styles';
import {signinSchema} from './SigninValidations';

const initialValues = {
  email: '',
  password: '',
};

function Signin() {
  const handleSigninSubmit = values => console.log(values);

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
