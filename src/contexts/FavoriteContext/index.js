import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect, createContext, useContext} from 'react';

const FavoriteContext = createContext();

const FavoriteProvider = ({children}) => {

  const [favorite, setFavorite] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('favorite')
      .then(data => {
        data && setFavorite(JSON.parse(data));
      })
      .then(setIsLoading(false));
  }, []);

  useEffect(() => {
    console.log(favorite.length);
    try {
      if (favorite.length > 0) {
        console.log('çalıştı');
        AsyncStorage.setItem('favorite', JSON.stringify(favorite));
      } else {
        AsyncStorage.removeItem('favorite');
      }
    } catch (error) {
      console.log('error', error.message);
    }
  }, [favorite]);

  const editFav = (job, findIsFavorite) => {
    if (!findIsFavorite) {
      setFavorite(prev => [...prev, job]);
    } else {
      const filtred = favorite.filter(item => item.id !== job.id);
      setFavorite(filtred);
    }
  };

  const values = {
    favorite,
    editFav,
    isLoading,
  };
  return (
    <FavoriteContext.Provider value={values}>
      {children}
    </FavoriteContext.Provider>
  );
};

const useFavoriteContext = () => useContext(FavoriteContext);

export {useFavoriteContext, FavoriteProvider};
