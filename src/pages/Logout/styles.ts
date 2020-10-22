import styled from "styled-components/native";

export const BlockComponent = styled.View`
    background-color: rgba(255, 255, 255, 0.8);
    padding: 50px 15px 50px 15px;

    margin: 50px 10px 0 10px;

    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Titulo = styled.Text`
  color: #b164ae;
  font-size: 25px;
  align-self: center;
  padding-bottom: 10px;
`;

export const ButtonLogout = styled.TouchableOpacity`
  font-size: 20px;
  background-color: #b164ae;
  border-radius: 20px;
  
  width: 100px;
  height: 35px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  padding-top: 2px;
  color: white;
  text-align: center;
`;

export const Background = styled.ImageBackground`
  flex: 1;
  resizeMode: cover;
  justify-content: center;
`;

