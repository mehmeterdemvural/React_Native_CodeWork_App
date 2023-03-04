import React from 'react';

import Router from './Router';
import {FavoriteProvider} from './contexts/FavoriteContext';

function Wrapper() {
  return (
    <FavoriteProvider>
      <Router />
    </FavoriteProvider>
  );
}

export default Wrapper;
