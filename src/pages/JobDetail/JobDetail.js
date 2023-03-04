import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RenderHTML from 'react-native-render-html';

import useFetch from '../../hooks/useFetch';
import {API_URL} from '@env';
import {styles} from './JobDetail.styles';
import LoadingPage from '../../components/LoadingPage';
import ErrorPage from '../../components/ErrorPage';
import {useFavoriteContext} from '../../contexts/FavoriteContext';
import {useSubmitContext} from '../../contexts/SubmitContext';

function JobDetail({navigation, route}) {
  const {favorite, editFav} = useFavoriteContext();
  const {subValues, editSub} = useSubmitContext();

  const {fetchData, fetchLoading, fetchError, workFetch} = useFetch();

  const jobId = route.params;

  useEffect(() => {
    workFetch(`${API_URL}/${jobId}`);
  }, []);

  if (fetchLoading) {
    return <LoadingPage />;
  } else if (fetchError) {
    return <ErrorPage />;
  }
  const width = Dimensions.get('window').width;
  const source = {
    html: fetchData.contents,
  };
  const tagsStyles = {
    body: {
      whiteSpace: 'normal',
      color: '#4D455D',
      textAlign: 'justify',
    },
  };

  const findIsFavorite = favorite.find(favItem => favItem.id === fetchData.id);
  const findIsSubmit = subValues.find(subItem => subItem.id === fetchData.id);

  const onSub = () => {
    editSub(fetchData, findIsSubmit);
    navigation.navigate('JobsPage');
  };
  const onFav = () => {
    editFav(fetchData, findIsFavorite);
    navigation.navigate('JobsPage');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{fetchData.name}</Text>

        <View style={styles.headerInnerContainer}>
          <Text style={styles.title}>Company</Text>
          <Text style={styles.company}>: {fetchData.company.name}</Text>
        </View>

        <View style={styles.headerInnerContainer}>
          <Text style={styles.title}>Job Level</Text>
          <Text style={styles.level}>: {fetchData.levels[0].name}</Text>
        </View>

        <View style={styles.headerInnerContainer}>
          <Text style={styles.title}>Location</Text>
          <Text style={styles.location}>: {fetchData.locations[0].name}</Text>
        </View>

        <Text style={styles.detailText}>Job Detail</Text>
      </View>
      <View style={styles.bodyContainer}>
        <RenderHTML
          source={source}
          contentWidth={width}
          tagsStyles={tagsStyles}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onSub}>
          <View style={styles.buttonInnerContainer}>
            <Icon
              style={!findIsSubmit ? styles.buttonIcon : styles.buttonFav}
              name={'login'}
              size={20}
            />
            <Text style={styles.buttonText}>
              {!findIsSubmit ? 'Apply' : 'Cancel The Application'}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onFav}>
          <View style={styles.buttonInnerContainer}>
            <Icon
              style={!findIsFavorite ? styles.buttonIcon : styles.buttonFav}
              name={'heart'}
              size={20}
            />
            <Text style={styles.buttonText}>
              {!findIsFavorite ? 'Add To Favorite' : 'Remove From Favorites'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default JobDetail;
