import styled from "styled-components/native";

export const Wrapper = styled.View`
`;

export const BarraSuperior = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom-color:rgba(200, 121, 168, 0.73);
    border-bottom-width: 1px;
    padding: 50px 5px 10px 20px;
`;

export const IconHome = styled.Image`
    width: 25px;
    height: 25px;
    margin-right: 10px;
`;

export const TitleHome = styled.Text`
    font-size: 20px;
`;

export const Forms = styled.View`
    display: flex;
    flex-direction: column;
    margin: 5px 17px 10px 20px;
    border-bottom-color:rgba(200, 121, 168, 0.73);
    border-bottom-width: 1px;
`;

export const FormsTitle = styled.Text`
    font-size: 18px;
    padding: 0 0 10px 0;
`;

export const InputPiu = styled.TextInput`
    height: 120px;
    width: 300px;
    margin-bottom: 5px;
    border-radius: 25px;
    border: 1px solid rgba(0, 0, 0, 0.28);
    padding-left: 10px;
    padding-top: 10px;
    textAlignVertical: top;
`;

  export const Actions = styled.View`
    align-self: flex-end;
    display: flex;
    align-items: center;
    padding-right: 35px;
`;

export const Botao = styled.TouchableOpacity<{ livre: boolean }>`
  width: 110px;
  height: 33px;
  margin-bottom: 20px;
  background-color: #7cc1db;
  border-radius: 25px;
  border: 1px solid #7cc1db;

  opacity: ${(props) => (props.livre ? 1 : 0.5)};
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: #ffffff;
  padding: 2px 0px 0px 36px;
`;

export const Frases = styled.Text<{ livre: boolean }>`
  font-size: 13px;
  padding-bottom: 10px;
  color: ${(props) => (props.livre ? "black" : "red")};
  align-self: flex-end;
`;
