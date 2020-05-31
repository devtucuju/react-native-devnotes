import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import AppRoute from './src/routes';

import {store, persistor} from './src/store';

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AppRoute />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
