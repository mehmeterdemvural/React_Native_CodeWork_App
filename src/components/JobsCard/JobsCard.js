import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from './JobsCard.styles';
import {useFavoriteContext} from '../../contexts/FavoriteContext';

function JobsCard({jobs, handlePress}) {
  const {favorite} = useFavoriteContext();
  const findIsFavorite = favorite.find(favItem => favItem.id === jobs.id);
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.header}>{jobs.name}</Text>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Category</Text>
          <Text style={styles.item}>: {jobs.categories[0].name}</Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Conpany</Text>
          <Text style={styles.item}>: {jobs.company.name}</Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>Location</Text>
          <Text style={styles.item}>: {jobs.locations[0].name}</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Icon
            style={!findIsFavorite ? styles.buttonIcon : styles.buttonFav}
            name={'heart'}
            size={20}
          />
          <Text style={styles.level}>{jobs.levels[0].name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default JobsCard;
