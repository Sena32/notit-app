import React from 'react';
import 'react-native-gesture-handler';
import Routes from './routes';
import './config/ReactotronConfig';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <Routes />
    </>
  );
};

export default App;
