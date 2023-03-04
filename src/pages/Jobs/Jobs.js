import React, {useEffect, useState} from 'react';
import {View, FlatList, Text} from 'react-native';

import {API_URL} from '@env';
import {styles} from './Jobs.styles';
import useFetch from '../../hooks/useFetch';
import LoadingPage from '../../components/LoadingPage';
import ErrorPage from '../../components/ErrorPage';
import JobsCard from '../../components/JobsCard';
import { useFavoriteContext } from '../../contexts/FavoriteContext';

function Jobs({navigation}) {
  const {isLoading} = useFavoriteContext()
  const {fetchData, fetchError, fetchLoading, workFetch} = useFetch();
  const [page, setPage] = useState(1);
  
  useEffect(() => {
    workFetch(`${API_URL}?page=${page}`);
  }, []);

  const renderJobs = ({item}) => (
    <JobsCard jobs={item} handlePress={()=> handleJobsSelect(item.id)} />
  );
  const handleJobsSelect = id => {
    navigation.navigate('JobDetailPage', id);
  };

  if (fetchLoading || isLoading) {
    return <LoadingPage />;
  } else if (fetchError) {
    return <ErrorPage />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={fetchData.results}
        renderItem={renderJobs}
        contentContainerStyle={{paddingBottom: 30, paddingTop: 5}}
      />
    </View>
  );
}

export default Jobs;
