import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {styles} from './Favorite.tyles';
import {useFavoriteContext} from '../../contexts/FavoriteContext';
import JobsCard from '../../components/JobsCard';

function Favorite({navigation}) {
  const {favorite} = useFavoriteContext();

  const handleJobsSelect = id => {
    navigation.navigate('JobDetailPage', id);
  };

  const renderFav = ({item}) => (
    <JobsCard jobs={item} handlePress={() => handleJobsSelect(item.id)} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorite}
        renderItem={renderFav}
        contentContainerStyle={{paddingBottom: 40}}
      />
    </View>
  );
}

export default Favorite;
