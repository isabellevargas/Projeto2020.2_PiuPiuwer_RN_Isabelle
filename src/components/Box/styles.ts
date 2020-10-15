import styled from "styled-components/native";

export const BlockComponent = styled.View`
  background-color: rgba(255, 255, 255, 0.5);
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 15px;
  padding-right: 15px;

  margin-right: 10px;
  margin-left: 10px;

  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Titulo = styled.Text`
  color: #b164ae;
  font-size: 30px;
  align-self: center;
  padding-bottom: 10px;
`;

export const Subtitulo = styled.Text`
  font-size: 15px;
  text-align: center;
  padding-bottom: 20px;
`;

export const Forms = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.TextInput`
  border-color: rgba(0, 0, 0, 0.3);
  border-width: 1px;
  border-radius: 20px;
  width: 300px;

  margin-bottom: 20px;
  padding-left: 15px;
`;

export const Label = styled.Text`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Span = styled.Text`
  font-size: 15px;
  margin-bottom: 10px;
`;

export const ButtonLogin = styled.TouchableOpacity`
  font-size: 20px;
  background-color: #b164ae;
  border-radius: 20px;
  
  width: 80px;
  height: 30px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: white;
  text-align: center;
`;

