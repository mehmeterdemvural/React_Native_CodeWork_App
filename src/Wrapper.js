import React from 'react';

import Router from './Router';
import {FavoriteProvider} from './contexts/FavoriteContext';
import {SubmitProvider} from './contexts/SubmitContext';
import FlashMessage from 'react-native-flash-message';

function Wrapper() {
  return (
    <FavoriteProvider>
      <SubmitProvider>
        <Router />
        <FlashMessage position="top" />
      </SubmitProvider>
    </FavoriteProvider>
  );
}

export default Wrapper;
