import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 140,
    backgroundColor: '#F5E9CF',
    borderRadius: 10,
    padding: 5,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#E96479',
    textAlign: 'justify',
    marginBottom: 5,
  },
  innerContainer: {flex: 1, flexDirection: 'row'},
  title: {flex: 1, fontWeight: 'bold', color: '#E96479'},
  item: {color: '#4D455D', flex: 4, fontWeight: 'bold'},
  level: {textAlign: 'right', color: '#E96479', textAlignVertical: 'bottom', fontWeight: 'bold'},
});

export {styles};
