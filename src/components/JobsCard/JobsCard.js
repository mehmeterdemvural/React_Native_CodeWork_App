import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';

import {styles} from './JobsCard.styles';

function JobsCard({jobs, handlePress}) {
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
        <Text style={styles.level}>{jobs.levels[0].name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default JobsCard;
