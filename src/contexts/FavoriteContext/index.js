import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect, createContext, useContext} from 'react';

const FavoriteContext = createContext();

const FavoriteProvider = ({children}) => {
  const [favorite, setFavorite] = useState([]);
  const [isFavoriteLoading, setIsFavoriteLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('favorite')
      .then(data => {
        data && setFavorite(JSON.parse(data));
      })
      .then(setIsFavoriteLoading(false));
  }, []);

  useEffect(() => {
    try {
      if (favorite.length > 0) {
        AsyncStorage.setItem('favorite', JSON.stringify(favorite));
      } else {
        AsyncStorage.removeItem('favorite');
      }
    } catch (error) {
      console.log('Favorite Error : ', error.message);
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
    isFavoriteLoading,
  };
  return (
    <FavoriteContext.Provider value={values}>
      {children}
    </FavoriteContext.Provider>
  );
};

const useFavoriteContext = () => useContext(FavoriteContext);

export {useFavoriteContext, FavoriteProvider};
