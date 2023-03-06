import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#7DB9B6', padding: 5, paddingTop: 50},
  inputContainer: {marginVertical: 10, justifyContent: 'center'},
  inputLabelContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  inputLabel: {fontSize: 20, color: '#E96479', fontWeight: 'bold'},
  errorMessage: {color: '#E96479', textAlignVertical: 'center'},
  input: {
    backgroundColor: '#F5E9CF',
    borderRadius: 10,
    padding: 5,
    marginTop: 3,
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#F5E9CF',
    borderRadius: 10,
    margin: 30,
  },
  buttonText: {margin: 10, color: '#4D455D', fontWeight: 'bold', fontSize: 25},
});

export {styles};
