import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  height: 100%;
  padding: 30px;
  align-items: center;
  justify-content: center;
  background: #eee;
`;

export const Form = styled.View`
  align-items: center;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  width: 300px;
  height: 60px;
  background: #fff;
  border-radius: 4px;
  padding: 0 20px;
  border: solid 1px #ddd;
  margin-bottom: 10px;
`;

export const Error = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #ff0022;
`;

export const SubmitButton = styled(RectButton)`
  height: 40px;
  width: 175px;
  background: rgb(215, 228, 17);
  color: #fff;
  align-items: center;
  justify-content: center;
`;

export const TextBtn = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const Logo = styled.Text`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 30px;
  color: rgb(215, 228, 17);
`;
export const Apostrofo = styled.Text`
  font-size: 30px;
  color: #456098;
`;
export const SpanLogo = styled.Text`
  font-size: 20px;
  color: #f00999;
`;
