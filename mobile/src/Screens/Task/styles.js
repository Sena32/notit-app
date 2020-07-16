import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;
export const Task = styled.View`
  flex-direction: row;
  margin: 0 20px 30px;
  justify-content: space-between;
  background: rgb(215, 228, 17);
  padding: 10px;
`;

export const Container = styled.View``;

export const Description = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;
export const Date = styled.Text`
  font-size: 14px;
  color: #eee;
  margin-top: 2px;
`;
export const RemoveBtn = styled(RectButton)`
  height: 30px;
  width: 30px;
  background: #f00999;
  align-items: center;
  justify-content: center;
`;
export const RemoveBtnText = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: #fff;
`;
