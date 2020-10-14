import styled from "styled-components/native";

export const BlockComponent = styled.View`
  background-color: rgba(255, 255, 255, 0.5);
  padding-top: 50;
  padding-bottom: 50;
  padding-left: 15;
  padding-right: 15;

  margin-right: 10;
  margin-left: 10;

  border-radius: 20;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Titulo = styled.Text`
  color: #b164ae;
  font-size: 30;
  align-self: center;
  padding-bottom: 10;
`;

export const Subtitulo = styled.Text`
  font-size: 15;
  text-align: center;
  padding-bottom: 20;
`;

export const Forms = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  border-color: rgba(0, 0, 0, 0.3);
  border-width: 1;
  border-radius: 20;
  width: 300;

  margin-bottom: 20;
  padding-left: 15;
`;

export const Label = styled.Text`
  font-size: 18;
  margin-bottom: 10;
`;

export const Span = styled.Text`
  font-size: 15;
  margin-bottom: 10;
`;

export const ButtonLogin = styled.TouchableOpacity`
  font-size: 20;
  background-color: #b164ae;
  border-radius: 20;
  
  width: 80;
  height: 30;
`;

export const ButtonText = styled.Text`
  font-size: 18;
  color: white;
  text-align: center;
`;

