import React, {Component} from 'react';
import axios from 'axios';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  Logo,
  Apostrofo,
  SpanLogo,
  TextBtn,
  Error,
} from './styles';
const url = 'https://node-todo-dev.herokuapp.com/api/todos';

class Main extends Component {
  state = {
    newQuadro: '',
    error: '',
  };

  handleAddQuadro = (quadro) => {
    const {newQuadro} = this.state;
    const data = {
      description: newQuadro,
    };
    if (quadro !== '') {
      axios.post(url, data).then((res) => {
        if (res.status === 201) {
          this.handleClick(newQuadro);
        }
      });
    } else {
      this.setState({
        error: 'Insira uma tarefa :(',
      });
    }
  };

  handleClick = (quadro) => {
    const {navigation} = this.props;
    navigation.navigate('List', {quadro});
  };
  render() {
    const {newQuadro, error} = this.state;
    return (
      <Container>
        <Logo>
          Not
          <Apostrofo>'</Apostrofo>
          <SpanLogo>it</SpanLogo>
        </Logo>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Olá, Diga qual a sua Tarefa :)"
            value={newQuadro}
            onChangeText={(text) => this.setState({newQuadro: text})}
            returnKeyType="send"
            onSubmitEditing={() => this.handleAddQuadro(newQuadro)}
          />
          <Error>{error}</Error>
          <SubmitButton onPress={() => this.handleAddQuadro(newQuadro)}>
            <TextBtn>Criar Tarefa</TextBtn>
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

export default Main;

Main.navigationOptions = {
  title: '',
};
