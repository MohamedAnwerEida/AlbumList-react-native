/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default App = () => (
  <View style={{ flex: 1 }}>
      <Header HeaderText={'حراج الاعلانات'} />
      <AlbumList />
  </View>
);
