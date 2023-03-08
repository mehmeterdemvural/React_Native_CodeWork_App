import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {backgroundColor: '#7DB9B6', padding: 5, marginBottom: 20},
  headerContainer: {backgroundColor: '#F5E9CF', borderRadius: 10, padding: 5},
  headerInnerContainer: {padding: 5, flexDirection: 'row'},
  header: {
    color: '#E96479',
    textAlign: 'justify',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  title: {color: '#E96479', fontSize: 15, fontWeight: 'bold', flex: 1},
  company: {color: '#4D455D', fontSize: 15, fontWeight: 'bold', flex: 3},
  location: {color: '#4D455D', fontSize: 15, fontWeight: 'bold', flex: 3},
  level: {color: '#4D455D', fontSize: 15, fontWeight: 'bold', flex: 3},
  detailText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4D455D',
    marginTop: 5,
  },
  bodyContainer: {padding: 5},
  desc: {textAlign: 'justify', color: 'red', margin: 5},
  buttonContainer: {
    flexDirection: 'row',
    margin: 5,
    marginBottom: 40,
    alignItems: 'center',
  },
  button: {
    flex: 1,
    margin: 10,
    backgroundColor: '#4D455D',
    borderRadius: 5,
  },
  buttonInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    verticalAlign: 'middle',
    height: 50,
  },
  buttonIcon: {color: '#F5E9CF', marginRight: 5},
  buttonFav: {color: '#E96479', marginRight: 5},
  buttonText: {
    color: '#F5E9CF',
    marginLeft: 5,
    fontSize: 15,
    textAlign: 'center',
    flex: 1
  },
});

export {styles};
