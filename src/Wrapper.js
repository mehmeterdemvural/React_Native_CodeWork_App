import React from 'react';

import Router from './Router';
import {FavoriteProvider} from './contexts/FavoriteContext';
import {SubmitProvider} from './contexts/SubmitContext';

function Wrapper() {
  return (
    <FavoriteProvider>
      <SubmitProvider>
        <Router />
      </SubmitProvider>
    </FavoriteProvider>
  );
}

export default Wrapper;
