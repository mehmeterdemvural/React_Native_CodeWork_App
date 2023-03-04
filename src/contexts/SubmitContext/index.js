import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState, useEffect, createContext, useContext} from 'react';

const SubmitContext = createContext();

function SubmitProvider({children}) {
  const [subValues, setSubValues] = useState([]);
  const [isSubLoading, setIsSubLoading] = useState();

  const editSub = (job, findIsSubmit) => {
    if (!findIsSubmit) {
      setSubValues(prev => [...prev, job]);
    } else {
      const filtred = subValues.filter(item => item.id !== job.id);
      setSubValues(filtred);
    }
  };

  useEffect(() => {
    AsyncStorage.getItem('submitValues')
      .then(data => {
        data && setSubValues(JSON.parse(data));
      })
      .then(setIsSubLoading(false));
  }, []);

  useEffect(() => {
    try {
      if (subValues.length > 0) {
        AsyncStorage.setItem('submitValues', JSON.stringify(subValues));
      } else {
        AsyncStorage.removeItem('submitValues');
      }
    } catch (error) {
      console.log('SubmitValues Error : ', error.message);
    }
  }, [subValues]);

  const values = {
    subValues,
    setSubValues,
    isSubLoading,
    editSub,
  };
  return (
    <SubmitContext.Provider value={values}>{children}</SubmitContext.Provider>
  );
}

const useSubmitContext = () => useContext(SubmitContext);

export {useSubmitContext, SubmitProvider};
