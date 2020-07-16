import React, {useState, useEffect} from 'react';
import Load from '../../components/Load';
import axios from 'axios';
import {
  List,
  Task,
  Description,
  Date,
  RemoveBtn,
  RemoveBtnText,
  Container,
} from './styles';
const url = 'https://node-todo-dev.herokuapp.com/api/todos';

const Listagem = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  useEffect(() => {
    axios.get(url).then((res) => {
      setTasks(res.data);
      setIsLoad(false);
    });
  }, []);

  async function handleRemove(id) {
    try {
      await axios.delete(`${url}/${id}`).then((res) => {
        setIsLoad(false);
      });
    } catch (error) {
      console.error(error);
    } finally {
      axios.get(url).then((res) => {
        setTasks(res.data);
      });
    }
  }

  return (
    <>
      {isLoad ? (
        <Load />
      ) : (
        <List
          data={tasks}
          KeyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <Task>
              <Container>
                <Description>{item.description}</Description>
                <Date>{item.createdAt}</Date>
              </Container>

              <RemoveBtn
                onPress={() => {
                  handleRemove(item._id);
                }}>
                <RemoveBtnText>X</RemoveBtnText>
              </RemoveBtn>
            </Task>
          )}
        />
      )}
    </>
  );
};

export default Listagem;

Listagem.navigationOptions = (screenProps) => ({
  title: screenProps.navigation.getParam('quadro')
    ? screenProps.navigation.getParam('quadro')
    : 'Quadro Default',
});
