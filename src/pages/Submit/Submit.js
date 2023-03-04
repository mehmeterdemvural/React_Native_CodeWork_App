import React from 'react';
import {View, Text, FlatList} from 'react-native';
import JobsCard from '../../components/JobsCard';

import {useSubmitContext} from '../../contexts/SubmitContext';
import {styles} from './Submit.styles';

function Submit({navigation}) {
  const {subValues} = useSubmitContext();

  const handleJobsSelect = id => {
    navigation.navigate('JobDetailPage', id);
  };

  const renderSub = ({item}) => (
    <JobsCard jobs={item} handlePress={() => handleJobsSelect(item.id)} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={subValues}
        renderItem={renderSub}
        contentContainerStyle={{paddingBottom: 40}}
      />
    </View>
  );
}

export default Submit;
