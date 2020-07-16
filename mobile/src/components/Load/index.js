import React from 'react';
import * as Animatable from 'react-native-animatable';

import {Container} from './styles';

const Load = () => {
  return (
    <Container>
      <Animatable.Text
        animation="pulse"
        easing="ease-out"
        iterationCount="10000">
        Carregando...
      </Animatable.Text>
    </Container>
  );
};

export default Load;
