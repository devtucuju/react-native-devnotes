import React from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';

import {store, persistor} from './src/store';

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View>
          <Text>Olá</Text>
        </View>
      </PersistGate>
    </Provider>
  );
};
